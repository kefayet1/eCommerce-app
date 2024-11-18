<?php

namespace App\Http\Controllers;

use App\Models\VariationType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomAttributeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render("Dashboard/CustomerAttribute", [
            'attributes' => VariationType::select('id', 'name', 'active', 'created_at')->get()
        ]);
    }

    public function createAttribute(Request $request)
    {
        VariationType::create([
            'name' => $request->input("name")
        ]);
    }

    public function editAttribute(Request $request)
    {
        VariationType::where("id", "=", $request->input("id"))->update([
            'name' => $request->input("name"),
            'active' => $request->input("active")
        ]);
    }

    public function deleteAttribute(Request $request)
    {
        VariationType::where("id", "=", $request->input("id"))->delete();
    }

    public function toggleAttributeActive(Request $request)
    {
        // dd($request);
        VariationType::where("id", "=", $request->input("id"))->update([
            'active' => $request->input("active") ? false : true
        ]);
    }
}
