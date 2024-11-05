<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductEcomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalePageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductEcomController::class, "index"]);

Route::get('/product/{product_id}', [ProductEcomController::class, "getSingleProduct"]);

Route::get('/filterProduct', function () {
    return Inertia::render('Ecom/ProductFilterPage');
});

Route::get('/cart', function () {
    return Inertia::render('Ecom/Cart');
});

Route::get(
    '/dashboard',
    [OverviewController::class, "index"]
)->middleware(['auth', 'verified'])->name('dashboard');

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
    Route::get("/salePage", [SalePageController::class, "index"]);
    Route::post("/createInvoice", [SalePageController::class, "createInvoice"]);

    //Invoice
    Route::get("/invoice", [InvoiceController::class, "index"]);
    Route::get("/invoiceModal/{id}", [InvoiceController::class, "getInvoice"]);
    Route::get("/invoicePdf", [InvoiceController::class, "invoicePdf"]);
    Route::post("/deleteInvoice", [InvoiceController::class, "deleteInvoice"]);

    //Customers
    Route::get("/customer", [CustomerController::class, "index"]);
    Route::post("/createCustomers", [CustomerController::class, "createCustomers"]);
    Route::post("/deleteCustomer", [CustomerController::class, "deleteCustomers"]);

    //Ecommerce
    //checkout
    Route::get("/checkout", [CheckoutController::class, "index"]);

    //Order
    Route::post("/createOrder", [OrderController::class, "OrderCreate"]);

    //Payment success
    Route::get("/OrderSuccess/{transactionId}/{orderId}", [OrderController::class, "paypalOrderSuccess"])->name('paypalSuccess');
    Route::get("/StripeSuccess/{transactionId}/{orderId}", [OrderController::class, "stripeOrderSuccess"])->name("stripeSuccess");
    Route::post("/sslCommerzSuccess", [OrderController::class, "sslCommerzOrderSuccess"])->name("sslCommerzSuccess");
});






require __DIR__ . '/auth.php';
