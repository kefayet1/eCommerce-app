<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\CategoryVariation;
use App\Models\VariationType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SubCategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::where("parent_id", "=", null)->select('id', 'name as label')->get()->toArray();
        // dd($categories);
        $subCategory = DB::table("categories as childCategory")
            ->leftJoin("categories as parentCategory", 'parentCategory.id', "=", "childCategory.parent_id")
            ->leftJoin("category_variations as cv", "childCategory.id", "=", "cv.category_id")
            ->leftJoin("variation_types as vt", "cv.variation_type_id", "=", "vt.id")
            ->where('childCategory.parent_id', "!=", null)
            ->select('childCategory.id', 'childCategory.name', 'childCategory.parent_id', "childCategory.created_at", "parentCategory.name as parent_name", DB::raw("group_concat(vt.name) as variationsName"))
            ->groupBy('childCategory.id', 'childCategory.name', 'childCategory.parent_id', "childCategory.created_at", "parent_name")
            ->paginate(10);
        $variations = VariationType::select("id", "name as label")->get();
        return Inertia("Dashboard/SubCategories", ["categories" => $categories, 'subCategory' => $subCategory, "variations" => $variations]);
    }

    public function createSubCategory(Request $request)
    {
        // dd($request);
        $category = Category::create([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'user_id' => Auth::user()->id
        ]);

        foreach ($request->variations as $variation) {

            CategoryVariation::create([
                "category_id" => $category->id,
                "variation_type_id" => $variation['id']
            ]);
        }
    }

    public function deleteSubCategory(Request $request)
    {
        //    dd($request->id);
        Category::where("id", "=", $request->id)->delete();
    }

    public function editSubCategory(Request $request)
    {
        // dd($request->id);
        if ($request->has("parent_id")) {
            Category::where("id", "=", $request->id)->update([
                'name' => $request->name,
                'parent_id' => $request->parent_id
            ]);
            return;
        }
        Category::where("id", "=", $request->id)->update([
            'name' => $request->name
        ]);

    }
}
