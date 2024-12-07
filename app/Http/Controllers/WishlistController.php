<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
    //
    public function index()
    {
        return Inertia::render("Ecom/UserDashboard/Wishlist");
    }
}
