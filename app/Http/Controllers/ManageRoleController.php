<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ManageRoleController extends Controller
{
    //

    public function index()
    {
        return Inertia::render("DashBoard/MangeRole");
    }
}
