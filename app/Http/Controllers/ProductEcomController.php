<?php

namespace App\Http\Controllers;

use App\Models\ProductReview;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\VariationType;
use App\Models\ProductVariation;
use Illuminate\Support\Facades\DB;

class ProductEcomController extends Controller
{
    //
    public function index()
    {
        $popularProduct = DB::table("products as p")
            ->leftJoin("product_reviews", "p.id", "=", "product_reviews.product_id")
            ->where("p.remark", "=", "popular")
            ->select("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price", DB::raw('SUM(product_reviews.rating) as sumOfRating'), DB::raw("COUNT(product_reviews.id) as totalRating"))
            ->groupBy("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price")
            ->orderByDesc(DB::raw('SUM(product_reviews.rating)'))
            ->take(4)
            ->get();
        // dd($popularProduct);
        $featuredProduct = DB::table("products as p")
            ->leftJoin("product_reviews", "p.id", "=", "product_reviews.product_id")
            ->where("p.remark", "=", "featured")
            ->select("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price", DB::raw('SUM(product_reviews.rating) as sumOfRating'), DB::raw("COUNT(product_reviews.id) as totalRating"))
            ->groupBy("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price")
            ->orderByDesc(DB::raw('SUM(product_reviews.rating)'))
            ->take(8)
            ->get();
        $topSellingProduct = DB::table("products as p")
            ->leftJoin("product_reviews", "p.id", "=", "product_reviews.product_id")
            ->where("p.remark", "=", "top")
            ->select("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price", DB::raw('SUM(product_reviews.rating) as sumOfRating'), DB::raw("COUNT(product_reviews.id) as totalRating"))
            ->groupBy("p.id", "p.name", "p.short_des", "p.unit", "p.star", "p.remark", "p.category_id", "p.created_at", "p.price")
            ->orderByDesc(DB::raw('SUM(product_reviews.rating)'))
            ->take(4)
            ->get();

        //category tree
        $categories = Category::select("id", "name", "parent_id")->get();
        $groupCategory = $categories->groupBy("parent_id");
        // dd($categories->groupBy("parent_id"));
        function buildCategoryTree($categories, $parentId = null)
        {
            $branch = collect();

            if ($categories->has($parentId)) {
                foreach ($categories->get($parentId) as $category) {
                    $children = buildCategoryTree($categories, $category->id);

                    if ($children->isNotEmpty()) {
                        $category->childCategories = $children;
                    } else {
                        $category->childCategories = collect();
                    }
                    $branch->push($category);
                }
            }
            return $branch;
        }

        $categoryTree = buildCategoryTree($groupCategory, null);
        // dd($categoryTree);

        // $productWithRemark = DB::table("products")
        //     ->whereIn("products.remark", ['popular', 'featured', 'top'])
        //     ->select("products.name", "products.price", "products.remark")
        //     ->get();
        // dd($productWithRemark);
        return Inertia::render("Ecom/Home", ['popular' => $popularProduct, 'featuredProduct' => $featuredProduct, 'top' => $topSellingProduct, "categoryTree" => $categoryTree]);
    }

    public function getSingleProduct($productId)
    {
        $product = cache()->remember('product', 4, function () use ($productId) {
            return Product::find($productId);
        });


        //product variation
        $variations = DB::table("variation_types")
            ->leftJoin("product_variations", "variation_types.id", "=", "product_variations.variation_type_id")
            ->where("product_variations.product_id", "=", $productId)
            ->select(
                "product_variations.*",
                "variation_types.name as type_name",
                "variation_types.id as type_id"
            )
            ->get();
        // dd($variations[0]);
        $variationArr = [];
        foreach ($variations as $variation) {
            // dd($variationArr[$variation['type_name']]);
            if (isset($variationArr[$variation->type_name])) {
                $variationArr[$variation->type_name][] = $variation;
            } else {
                $variationArr[$variation->type_name] = [$variation];
            }
        }
        // dd($variationArr);

        $productReview = DB::table("product_reviews")
            ->leftJoin("users", "product_reviews.user_id", "=", "users.id")
            ->where("product_reviews.product_id", "=", $productId)
            ->select("users.id as userId", "users.name as userName", "product_reviews.*")
            ->paginate(10);

        return Inertia::render('Ecom/ProductPage', ["product" => $product, 'product_variation' => $variationArr, "product_review" => $productReview]);
    }
}
