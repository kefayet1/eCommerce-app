<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductEcomController extends Controller
{
    //
    public function index()
    {
        $popularProduct = Product::where("remark", "=", "popular")->take(4)->get();
        $featuredProduct = Product::where("remark", "=", "featured")->take(8)->get();
        $topSellingProduct = Product::where("remark", "=", "top")->take(4)->get();

        return Inertia::render("Ecom/Home", ['popular' => $popularProduct, 'featuredProduct' => $featuredProduct, 'top' => $topSellingProduct]);
    }

    public function getSingleProduct($productId)
    {
        $product = cache()->remember('product', 4, function () use ($productId) {
            return Product::find($productId);
        });
        return Inertia::render('Ecom/ProductPage', ["product" => $product]);
    }
}
