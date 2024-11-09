<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CustomerController extends Controller
{
    //

    public function index()
    {
        $customers = Customer::paginate(10);
        return Inertia::render("Dashboard/Customers", ['customers' => $customers]);
    }

    public function createCustomers(Request $request)
    {
        $customers = Customer::create([
            "name" => $request->input("name"),
            "email" => $request->input("email"),
            "mobile" => $request->input("mobile"),
            "user_id" => Auth::user()->id
        ]);
    }

    public function deleteCustomers(Request $request)
    {
        $customers = Customer::where("id", "=", $request->input("id"))
            ->delete();
        
    }
}
