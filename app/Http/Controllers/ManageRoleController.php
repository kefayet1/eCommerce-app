<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManageRoleController extends Controller
{
    //

    public function index()
    {
        $users = DB::table("users")
            ->leftJoin("model_has_roles", "users.id", "=", "model_has_roles.model_id")
            ->leftJoin("roles", "model_has_roles.role_id", "=", "roles.id")
            ->select("users.id", "users.name", "users.email", "roles.name as rolesName", "users.created_at")
            ->paginate(10);
        return Inertia::render("Dashboard/ManageRole", ['users' => $users]);
    }

    public function changeUserRole(Request $request)
    {
        $user = User::where('id', '=', $request->input('id'))->first();
        $user->assignRole($request->input("roleName"));
    }

    public function deleteUserRole(Request $request)
    {
        User::where("id", "=", $request->input("id"))->delete();
    }
}
