<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderDetailsController extends Controller
{
    //
    public function index($id)
    {
        $order = DB::table("orders")
            ->leftJoin("users", "orders.user_id", "=", "users.id")
            ->where("orders.id", "=", $id)
            ->select("orders.*", "users.name", "users.email")
            ->first();

        $orderItems = DB::table("order_items as oi")
            ->leftJoin("products", "oi.product_id", "=", "products.id")
            ->where("oi.order_id", "=", $id)
            ->select("oi.id", "oi.qty", "oi.sale_price", "products.name", 'products.price')
            ->groupBy("oi.id", "oi.qty", "oi.sale_price", "products.name", 'products.price')
            ->get();
        // dd($orderItems);
        // dd($order);
        return Inertia::render("Dashboard/OrderDetails", ["order" => $order, "order_items" => $orderItems]);
    }

    public function orderDelete(Request $request)
    {
        DB::table("orders")->where("id", "=", $request->id)->delete();
    }
}
