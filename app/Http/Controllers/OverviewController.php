<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Invoice;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OverviewController extends Controller
{
    //
    public function index()
    {
        $product = Product::count();
        $category = Category::count();
        $total = Invoice::sum('total');
        $invoice = Invoice::count();


        $totalSaleData = DB::table('products as p')
            ->leftJoin("order_items as oi", "p.id", "=", "oi.product_id")
            ->select(DB::raw("SUM(p.original_price * oi.qty) as totalSale"), DB::raw("SUM(p.price * oi.qty) as totalRevenue"))
            ->get()[0];

        //last week sale report for line chart 
        $lastWeekSaleReport = DB::table("transactions")
            ->select(DB::raw("DAYNAME(created_at) as weekday, SUM(payable) as total_sales"))
            ->where('created_at', '>=', now()->subWeek())
            ->groupBy(DB::raw("DATE(created_at), DAYNAME(created_at)"))
            ->orderBy(DB::raw("DATE(created_at)"))
            ->get();
        // dd($lastWeekSaleReport);

        //last mount top sale category for pie chart
        $lastMonthCategoryReport = DB::table("categories as c")
            ->leftJoin("products as p", "c.id", "=", "p.category_id")
            ->leftJoin("order_items as oi", "p.id", "=", "oi.product_id")
            ->whereBetween("oi.created_at", [now()->subMonth(), now()])
            ->select("c.name", DB::raw("SUM(oi.sale_price) as price"))
            ->groupBy("c.name")
            ->orderBy('price', 'desc')
            ->limit(5)
            ->get();


        //top category sell report
        $topCategorySale = DB::table("categories as c")
            ->leftJoin("products as p", "c.id", "=", "p.category_id")
            ->leftJoin("order_items as oi", "p.id", "=", "oi.product_id")
            ->select(
                "c.name",
                "c.id",
                DB::raw("SUM(oi.qty) as productQty"),
                DB::raw("SUM(oi.sale_price) as productSalePrice")
            )
            ->groupBy("c.name", "c.id")
            ->orderBy("productSalePrice", "desc")
            ->limit(7)
            ->get();
        // dd($topCategorySaleProd);

        //top selling product
        $topSellingProd = DB::table("products as p")
            ->leftJoin("order_items as oi", "p.id", "=", "oi.product_id")
            ->select("p.name", DB::raw("SUM(oi.sale_price) as prodPrice"), DB::raw("SUM(oi.qty) as prodQty"))
            ->groupBy("p.name")
            ->orderBy("prodPrice", "desc")
            ->limit(7)
            ->get();

        // dd($topSellingProd);
        $orders = DB::table("orders as o")
            ->leftJoin("users as u", "o.user_id", "=", "u.id")
            ->leftJoin("transactions as t", "o.id", "=", "t.id")
            ->select("u.name", "o.id", "o.delivery_status", "t.payable", "t.payment_status")
            ->orderBy("o.id", "desc")
            ->limit(7)
            ->get();

        return Inertia::render(
            "Dashboard/Overview",
            [
                'product' => $product,
                'category' => $category,
                'totalSaleData' => $totalSaleData,
                'lastWeekSaleReport' => $lastWeekSaleReport,
                "lastMonthCategoryReport" => $lastMonthCategoryReport,
                "topCategorySale" => $topCategorySale,
                "topSellingProd" => $topSellingProd,
                "orders" => $orders
            ]
        );
    }
}
