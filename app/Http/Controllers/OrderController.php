<?php

namespace App\Http\Controllers;

use App\Http\Helper\Paypal;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Helper\SSLCommerz;
use App\Http\Helper\StripeHelper;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;


class OrderController extends Controller
{
    //
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
        StripeHelper::success($request, $transitionId, $orderId);
        return Inertia::render("Ecom/PaymentSuccess", ['orderId' => $orderId, 'tran_id' => $transitionId, 'paymentMethod' => "Stripe"]);
    }

    public function sslCommerzOrderSuccess(Request $request)
    {
        dd($request);
    }
}