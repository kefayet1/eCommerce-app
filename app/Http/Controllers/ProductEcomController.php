<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
        return Inertia::render('Ecom/ProductPage', ["product" => $product]);
    }
}
