<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
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
            ->where('childCategory.parent_id', "!=", null)
            ->select('childCategory.id', 'childCategory.name', 'childCategory.parent_id', "parentCategory.name as parent_name")
            ->get();
        return Inertia("Dashboard/SubCategories", ["categories" => $categories, 'subCategory' => $subCategory]);
    }

    public function createSubCategory(Request $request)
    {
        Category::create([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'user_id' => Auth::user()->id
        ]);
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
