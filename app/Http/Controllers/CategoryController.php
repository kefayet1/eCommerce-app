<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    //

    public function index(Request $request)
    {
        $categories = Category::where('user_id', "=", Auth::user()->id)->get();
        // dd($categories);
        return Inertia::render("Dashboard/Categories", ['categories' => $categories]);
    }

    public function CreateCategory(Request $request)
    {
        Category::create([
            'name' => $request->name,
            'user_id' => Auth::user()->id
        ]);
    }

    public function destroy(Request $request)
    {
        Category::where('user_id', "=", Auth::user()->id)
            ->where('id', '=', $request->input('id'))->delete();
    }

    public function editCategory(Request $request)
    {
        Category::where('user_id', "=", Auth::user()->id)->where('id', '=', $request->input('id'))->update(['name' => $request->input('name')]);
    }
}
