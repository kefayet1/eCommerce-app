<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Overview');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get("/home", function () {
        return Inertia::render("Home");
    });

    //categories 
    Route::get("/categories", [CategoryController::class, 'index']);
    Route::post("/createCategory", [CategoryController::class, 'createCategory']);
    Route::post("/deleteCategory", [CategoryController::class, 'destroy']);
    Route::post("/editCategory", [CategoryController::class, 'editCategory']);

    //product
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/createProduct', [ProductController::class, 'CreateProduct']);
    Route::post('/deleteProduct', [ProductController::class, 'destroy']);
    Route::post('/editProduct', [ProductController::class, 'editProduct']);

    //SalePage
    Route::get("/salePage", [InvoiceController::class, "index"]);
});



require __DIR__ . '/auth.php';
