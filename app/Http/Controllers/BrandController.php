<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BrandController extends Controller
{
    //
    public function index()
    {
        $brands = Brand::get();

        return Inertia::render("Dashboard/Brand", ['brands' => $brands]);
    }

    public function createBrand(Request $request)
    {
        Brand::create([
            'name' => $request->input('name'),
            "user_id" => Auth::user()->id
        ]);
    }

    public function editBrand(Request $request)
    {
        Brand::where("id", "=", $request->input("id"))->update([
            "name" => $request->input("name")
        ]);
    }

    public function deleteBrand(Request $request)
    {
        Brand::where("id", "=", $request->input("id"))->delete();
    }
}
