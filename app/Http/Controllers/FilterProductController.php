<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class FilterProductController extends Controller
{
    //
    public function index(Request $request)
    {
        // dd($request);

        $category = DB::table('categories')->where("name", "=", $request->route("categoryName"))->select('id')->first();

 
        $subCategories = DB::table("categories")->where("parent_id", "=", $category->id)->select('name', 'id')->get();
        // dd($subCategories);

        // dd([...$subCategories->pluck('id'), $category->id]);
        //heist and lowest product price
        $heistLowProdPrice = DB::table('products')
            ->selectRaw('MAX(CAST(price AS DECIMAL(10, 2))) as highest_price')
            ->selectRaw('MIN(CAST(price AS DECIMAL(10, 2))) as lowest_price')
            ->first();

            $products = DB::table("products as p")
            ->leftJoin("categories", "p.category_id", "=", "categories.id")
            ->leftJoin("product_reviews as pr", "p.id", "=", "pr.product_id")
            // if subCategories is empty that mean it not have any child category then current category product will return
            ->when($subCategories->isEmpty(), function ($query) use ($category) {
                return $query->where('categories.id', $category->id);
            })

            ->when(!$subCategories->isEmpty(), function ($query) use ($subCategories, $category) {
                return $query->whereIn('categories.id', [...$subCategories->pluck('id'), $category->id]);
            })
            ->when($request->query('min') || $request->query( 'max'), function ($query) use ($request) {
                $priceRange = $request->query('priceRange');
                return $query->whereBetween('p.price', [(int)$request->query('min'), (int)$request->query('max')]);
            })
            ->select("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price", DB::raw('SUM(pr.rating) as sumOfRating'), DB::raw("COUNT(pr.id) as totalRating"))
            ->groupBy("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price") // Optional, only if needed
            ->paginate(12)
            ->withQueryString();

            // dd($products);
        return Inertia::render(
            'Ecom/ProductFilterPage',
            [
                'subCategories' => $subCategories,
                "products" => $products,
                'categoriesParam' => $request->query('categories'),
                'heistLowProdPrice' => [$request->query('priceRange')[1] ?? $heistLowProdPrice->highest_price, $request->query('priceRange')[0] ?? $heistLowProdPrice->lowest_price]
            ]
        );
    }
}
