<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    //
    public function index()
    {
        return Inertia("Dashboard/SubCategories");
    }
}
