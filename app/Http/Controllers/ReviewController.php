<?php

namespace App\Http\Controllers;

use App\Models\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReviewController extends Controller
{
    //
    public function index()
    {
        $orders = DB::table("orders as o")
            ->leftJoin("order_items as oi", "o.id", "=", "oi.order_id")
            ->leftJoin("transactions as t", "o.id", "=", "t.order_id")
            ->leftJoin("products as p", "oi.product_id", "=", "p.id")
            ->leftJoin("product_reviews as pr", function ($join) {
                $join->on("pr.product_id", "=", "p.id")
                    ->where("pr.user_id", "=", Auth::user()->id);
            })
            ->where("o.user_id", "=", Auth::user()->id)
            ->select(
                "o.delivery_status",
                "o.id as orderID",
                "o.created_at",
                "oi.sale_price",
                "oi.qty",
                "oi.id as orderItemId",
                "p.name",
                "p.id as productId",
                "t.payable",
                "pr.review",
                "pr.rating",
                "pr.id as productReviewId",
                DB::raw("MAX(pr.id) as maxIdReview")
            )
            ->groupBy(
                "o.delivery_status",
                "o.created_at",
                "orderID",
                "orderItemId",
                "oi.sale_price",
                "oi.id",
                "oi.qty",
                "p.name",
                "productId",
                "t.payable",
                "pr.review",
                "pr.rating",
                "productReviewId",
            )
            ->get();
        // dd($orders);

        $groupedOrders = $orders->groupBy('orderID')->map(function ($orderItems, $orderID) {
            // dd($orderItems);
            return [
                'orderID' => $orderID,
                "payable" => $orderItems->first()->payable,
                "created_at" => $orderItems->first()->created_at,
                'delivery_status' => $orderItems->first()->delivery_status,
                'order_items' => $orderItems->groupBy('orderItemId')->map(function ($item) {
                    $firstItem = $item->first();
                    // dd($firstItem);
                    return [
                        "id" => $firstItem->orderItemId,
                        "sale_price" => $firstItem->sale_price,
                        'qty' => $firstItem->qty,
                        'name' => $firstItem->name,
                        "productId" => $firstItem->productId,
                        "productReviewId" => $firstItem->productReviewId,
                        "product_review" => [
                            "review" => $firstItem->review,
                            "rating" => $firstItem->rating,
                            "productReviewId" => $firstItem->productReviewId,
                            "max_id" => $firstItem->maxIdReview
                        ]
                    ];

                })->values(),
            ];
        })->values();

        // dd($groupedOrders);
        return Inertia::render("Ecom/UserDashboard/Reviews", ["reviewOrder" => $groupedOrders]);
    }

    public function addReview(Request $request)
    {
        ProductReview::create([
            "user_id" => Auth::user()->id,
            "product_id" => $request->input("productId"),
            "rating" => $request->input("star"),
            "review" => $request->input("reviewText")
        ]);
    }
}
