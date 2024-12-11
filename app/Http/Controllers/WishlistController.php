<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    //
    public function index()
    {
        $wishlist = DB::table("wish_lists as wl")
            ->leftJoin("products as p", "wl.product_id", "=", "p.id")
            ->where("wl.user_id", "=", Auth::user()->id)
            ->where("wl.is_active", "=", true)
            ->select("wl.id as wishListItemId", "wl.is_active", "p.id", "p.name", "p.short_des", "p.price", "p.original_price", "p.discount", "p.discount_price", "p.discount", "p.unit", "p.star", "p.remark", "p.img_url", "p.user_id", "p.category_id", "p.brand_id", )
            ->get();
        return Inertia::render("Ecom/UserDashboard/Wishlist", ["wishlist" => $wishlist]);
    }

    public function deleteWishListItem(Request $request)
    {
        DB::table("wish_lists")
            ->where("id", "=", $request->input("wishlistId"))
            ->delete();
    }

    public function addWishListItem(Request $request)
    {
       $wishList =  WishList::create([
            "user_id" => Auth::user()->id,
            "product_id" => $request->input("id"),
            "is_active" => true
        ]);

        // dd(Auth::user()->id);
    }
}
