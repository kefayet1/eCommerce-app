<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OverviewController extends Controller
{
    //
    public function index()
    {
        $product = Product::count();
        $category = Category::count();
        $total = Invoice::sum('total');
        $invoice = Invoice::count();
        return Inertia::render("Dashboard/Overview", ['product' => $product, 'category' => $category, 'total' => $total, 'invoice' => $invoice]);
    }
}
