<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class MyOrderController extends Controller
{
    //

    public function index()
    {
        $orders = DB::table("orders")
            ->leftJoin("transactions", 'orders.id', "=", "transactions.id")
            ->where("user_id", "=", Auth::user()->id)
            ->get()
            ->map(function ($order) {
                $order->formatted_date = Carbon::parse($order->created_at)->format('d M Y');
                $order->formatted_day_name = Carbon::parse($order->created_at)->format('l');
                return $order;
            });
        // dd($orders);

        return Inertia::render("Ecom/UserDashboard/MyOrder", ["orders" => $orders]);
    }

    public function userOrderDetail($id)
    {
        // dd($id);
        // dd(Auth::user()->id);
        $order = DB::table("orders")
            ->leftJoin("transactions", "orders.id", "=", "transactions.order_id")
            ->where("orders.id", "=", $id)
            ->where("orders.user_id", "=", Auth::user()->id)
            ->select("orders.id", "orders.ship_details", "orders.delivery_status", "orders.created_at", "transactions.payment_status", "transactions.payment_method", "transactions.total", "transactions.payable", "transactions.vat")
            ->first();

        $order_items = DB::table("order_items")
            ->leftJoin("products", "order_items.product_id", "=", "products.id")
            ->where("order_items.order_id", "=", $id)
            ->select("order_items.id", "order_items.sale_price", "order_items.qty", "products.name", "products.price")
            ->get();

        return Inertia::render("Ecom/UserDashboard/userOrder", ['order' => $order, "order_items" => $order_items]);
    }
}
