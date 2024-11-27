<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use App\Mail\OrderSuccess;
use App\Http\Helper\Paypal;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Helper\SSLCommerz;
use App\Http\Helper\StripeHelper;
use App\Jobs\OrderSuccessJob;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;


class OrderController extends Controller
{
    //

    public function index()
    {
        $order = DB::table("orders")
            ->join("transactions", "orders.id", "=", "transactions.order_id")
            ->leftJoin("users", "orders.user_id", "=", "users.id")
            ->select("users.name", "users.email", "orders.delivery_status", "orders.id", "transactions.total", "transactions.payment_status", "transactions.vat", "transactions.payment_method")
            ->paginate(10);
        return Inertia::render("Dashboard/Orders", ['orders' => $order]);
    }
    public function OrderCreate(Request $request)
    {
        // dd("hello");
        $user_id = Auth::user()->id;
        $user_email = Auth::user()->email;

        $tran_id = uniqid();

        $delivery_status = 'pending';
        $payment_status = 'pending';
        $fullName = $request->input("firstName") . " " . $request->input("lastName");
        $ship_details = "Name:{$fullName},Address:{$request->input("address1")},City:{$request->input("city")},Phone:{$request->input("phone")},Zip Code:{$request->input("zipCode")}";


        // Payable Calculation
        $total = 0;
        $productIds = [];
        // dd($request->input("product")[0]['price']);

        foreach ($request->input("product") as $product) {
            $total += ($product['price'] + 0) * $product['totalProduct'];
        }

        //add vat
        $vat = ($total * 3) / 100;
        $payable = $total + $vat;

        //convert into dollar rate
        $convertDollar = $payable / 119;

        //create order
        $order = Order::create([
            'ship_details' => $ship_details,
            'delivery_status' => $delivery_status,
            "user_id" => Auth::user()->id,
        ]);

        $orderId = $order->id;

        //create Transaction
        $transaction = Transaction::create([
            'total' => $total,
            'vat' => $vat,
            'payable' => $payable,
            'tran_id' => $tran_id,
            'currency' => "BDT",
            "order_id" => $orderId,
            'payment_status' => $payment_status,
        ]);


        foreach ($request->input("product") as $product) {
            $orderItem = OrderItem::create([
                'order_id' => $orderId,
                'product_id' => $product['id'],
                'user_id' => $user_id,
                "sale_price" => $product['price'],
                'qty' => $product['totalProduct']
            ]);
        }
        // $paymentUrl = match ($request->input('paymentMethod')) {
        //     'paypal' => ,
        //     'stripe' => StripeHelper::createStripeOrder(Auth::user()),
        //     default => SSLCommerz::InitiatePayment(Auth::user(), $payable, $tran_id, $ship_details)['redirectGatewayURLFailed']
        // };


        switch ($request->input("paymentMethod")) {
            case "paypal":
                $paymentUrl = Paypal::createPaypalOrder($tran_id, $orderId, $convertDollar, $ship_details, $request->input("phone"));
                break;
            case "stripe":
                $response = StripeHelper::createStripeOrder(Auth::user(), $tran_id, $orderId, $convertDollar);
                $paymentUrl = $response['url'];
                break;
            default:
                $response = SSLCommerz::InitiatePayment(Auth::user(), $payable, $tran_id, $ship_details);
                $paymentUrl = $response['redirectGatewayURL'];
                break;
        }
        // dd($paymentUrl);

        return Inertia::location($paymentUrl);

    }


    public function paypalOrderSuccess(Request $request, $transitionId, $orderId)
    {
        Paypal::success($request, $transitionId, $orderId);
        return Inertia::render("Ecom/PaymentSuccess", ['orderId' => $orderId, 'tran_id' => $request->query('token'), 'paymentMethod' => "Paypal"]);
    }

    public function stripeOrderSuccess(Request $request, $transitionId, $orderId)
    {
        $order = DB::table("orders")
            ->leftJoin("transactions", "orders.id", "=", "transactions.order_id")
            ->where("orders.id", "=", $orderId)
            ->where("orders.user_id", "=", Auth::user()->id)
            ->select("orders.id", "orders.ship_details", "orders.delivery_status", "orders.created_at", "transactions.payment_status", "transactions.payment_method", "transactions.total", "transactions.payable", "transactions.vat")
            ->first();

        $order_items = DB::table("order_items")
            ->leftJoin("products", "order_items.product_id", "=", "products.id")
            ->where("order_items.order_id", "=", $orderId)
            ->select("order_items.id", "order_items.sale_price", "order_items.qty", "products.name", "products.price")
            ->get();

        $user = Auth::user();
        $configuration = "";

        
        OrderSuccessJob::dispatch($user->email,$order,$order_items, $user);

        StripeHelper::success($request, $transitionId, $orderId);
        return Inertia::render("Ecom/PaymentSuccess", ['orderId' => $orderId, 'tran_id' => $transitionId, 'paymentMethod' => "Stripe"]);
    }
    

    public function sslCommerzOrderSuccess(Request $request)
    {
        dd($request);
    }
}