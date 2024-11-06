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
        // dd($request);
        $categories = DB::table('categories')->select('id', 'name')->get();

        //heist and lowest product price
        $heistLowProdPrice = DB::table('products')
            ->selectRaw('MAX(CAST(price AS DECIMAL(10, 2))) as highest_price')
            ->selectRaw('MIN(CAST(price AS DECIMAL(10, 2))) as lowest_price')
            ->first();

        $products = DB::table("products")
            ->leftJoin("categories", "products.category_id", "=", "categories.id")
            ->when($request->query('categories'), function ($query) use ($request) {
                return $query->whereIn('categories.name', $request->query("categories"));
            })
            ->select("products.*")
            ->groupBy('products.id') // Optional, only if needed
            ->paginate(12);
        return Inertia::render(
            'Ecom/ProductFilterPage',
            [
                'categories' => $categories,
                "products" => $products,
                'categoriesParam' => $request->query('categories'),
                'heistLowProdPrice' => $heistLowProdPrice
            ]
        );
    }
}
