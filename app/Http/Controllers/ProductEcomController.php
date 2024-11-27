<?php

namespace App\Http\Controllers;

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
        $popularProduct = Product::where("remark", "=", "popular")->take(4)->get();
        $featuredProduct = Product::where("remark", "=", "featured")->take(8)->get();
        $topSellingProduct = Product::where("remark", "=", "top")->take(4)->get();

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

        return Inertia::render("Ecom/Home", ['popular' => $popularProduct, 'featuredProduct' => $featuredProduct, 'top' => $topSellingProduct, "categoryTree" => $categoryTree]);
    }

    public function getSingleProduct($productId)
    {
        $product = cache()->remember('product', 4, function () use ($productId) {
            return Product::find($productId);
        });

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
        foreach($variations as $variation){
            // dd($variationArr[$variation['type_name']]);
            if(isset($variationArr[$variation->type_name])){
                $variationArr[$variation->type_name][] = $variation;
            }else{
                $variationArr[$variation->type_name] = [$variation];
            }
        }
        // dd($variationArr);
        
        return Inertia::render('Ecom/ProductPage', ["product" => $product, 'product_variation' => $variationArr]);
    }
}
