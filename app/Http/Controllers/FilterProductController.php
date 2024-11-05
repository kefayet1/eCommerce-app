<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class FilterProductController extends Controller
{
    //
    public function index(Request $request)
    {
        $categories = DB::table('categories')->select('id', 'name')->get();

        $products = DB::table("products")->paginate(12);
        // dd($products);
        return Inertia::render('Ecom/ProductFilterPage', ['categories' => $categories, "products" => $products]);
    }
}
