<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    //
    public function index()
    {
        $categories = Category::select('id', DB::raw("name as label"))->get();
        // $products = Product::where("user_id", "=", Auth::user()->id)->get();
        $products = DB::table("products")
            ->leftJoin("categories", "products.category_id", "=", "categories.id")
            ->select("products.name as productName", "products.price", "products.unit", "products.created_at", "products.img_url", "categories.name as categoryName", "products.id", "categories.id as categoryId")
            ->paginate(10);

        return Inertia::render("Dashboard/Product", ['categories' => $categories, 'products' => $products]);
    }

    public function CreateProduct(Request $request)
    {
        $user_id = Auth::user()->id;
        // $path = $request->file('image')->store('public');
        // dd($path);

        $img = $request->file('image');
        $t = time();
        $file_name = $img->getClientOriginalName();
        $img_name = "{$user_id}-{$t}-{$file_name}";
        $img_url = "uploads/{$img_name}";

        // Upload File
        $img->move(public_path('uploads'), $img_url);

        Product::create([
            "name" => $request->input("name"),
            "price" => $request->input("price") === "" ? 0 : $request->input("price"),
            "unit" => $request->input("unit") === "" ? 0 : $request->input("unit"),
            "category_id" => $request->input("categoryId"),
            "img_url" => $img_url,
            "user_id" => $user_id
        ]);
    }

    public function destroy(Request $request)
    {
        Product::where("user_id", "=", Auth::user()->id)->where("id", "=", $request->input("id"))->delete();
    }

    public function editProduct(Request $request)
    {
        $user_id = Auth::user()->id;
        $img_url = null;

        if ($request->hasFile('image')) {
            $img = $request->file('image');
            $t = time();
            $file_name = $img->getClientOriginalName();
            $img_name = "{$user_id}-{$t}-{$file_name}";
            $img_url = "uploads/{$img_name}";

            // Upload File
            $img->move(public_path('uploads'), $img_url);

            //deleting old image
            $oldImg = $request->input("oldImage");

            if (file_exists(public_path($oldImg))) {
                unlink(public_path($oldImg));
            }
        }

        Product::where("user_id", "=", Auth::user()->id)->where("id", "=", $request->input("id"))->update([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'unit' => $request->input(key: 'unit'),
            'category_id' => $request->input('categoryId'),
            'img_url' => $img_url ? $img_url : $request->input("oldImage"),
        ]);
    }

}
