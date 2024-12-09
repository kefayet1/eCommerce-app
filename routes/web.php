<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CustomAttributeController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FilterProductController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ManageRoleController;
use App\Http\Controllers\MyOrderController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailsController;
use App\Http\Controllers\OtpController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductEcomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SalePageController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\WishlistController;
use App\Models\WishList;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Unauthenticated route
Route::get('/', [ProductEcomController::class, "index"])->name('home');

Route::get('/product/{product_id}', [ProductEcomController::class, "getSingleProduct"]);

Route::get('/filterProduct/{categoryName}', [FilterProductController::class, "index"])->name("filterProduct");

Route::get('/cart', function () {
    return Inertia::render('Ecom/Cart');
});

Route::get("/sentOtp", [OtpController::class, "sentOtp"]);
Route::post("/createOtp", [OtpController::class, "createOtp"]);
Route::get("/verifyOtp/{otp_token}/{email}", [OtpController::class, "verifyOtp"]);
Route::post("/sentOtpForVerifyOtp", [OtpController::class, "sentOtpForVerifyOtp"]);
Route::get("/otpResetPassword/{otp_token}/{email}/{resetPasswordToken}", [OtpController::class, "otpResetPassword"]);
Route::post("/resetUserPassword", [OtpController::class, "resetUserPassword"]);

// Dashboard
Route::get(
    '/dashboard',
    [OverviewController::class, "index"]
)->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');

Route::middleware(['auth', 'role:admin'])->group(function () {
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

    //sub categories
    Route::get("/subCategory", [SubCategoryController::class, 'index'])->name('subCategory.index');
    Route::post("/createSubCategory", [SubCategoryController::class, 'createSubCategory']);
    Route::post("/deleteSubCategory", [SubCategoryController::class, 'deleteSubCategory']);
    Route::post("/editSubCategory", [SubCategoryController::class, 'editSubCategory']);

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

    //Order
    Route::get("/order", [OrderController::class, "index"]);
    Route::get("/orderDetails/{id}", [OrderDetailsController::class, "index"]);
    Route::post("/orderDelete", [OrderDetailsController::class, "orderDelete"]);

    //Brand
    Route::get("/brand", [BrandController::class, "index"]);
    Route::post("/createBrand", [BrandController::class, "createBrand"]);
    Route::post("/editBrand", [BrandController::class, "editBrand"]);
    Route::post("/deleteBrand", [BrandController::class, "deleteBrand"]);

    // Manage Role
    Route::get("/manageRole", [ManageRoleController::class, "index"]);
    Route::post("/changeUserRole", [ManageRoleController::class, "changeUserRole"]);
    Route::post("/deleteUserRole", [ManageRoleController::class, "deleteUserRole"]);

    // Custom attribute
    Route::get("/customAttribute", [CustomAttributeController::class, "index"]);
    Route::post("/createAttribute", [CustomAttributeController::class, "createAttribute"]);
    Route::post("/editAttribute", [CustomAttributeController::class, "editAttribute"]);
    Route::post("/deleteAttribute", [CustomAttributeController::class, "deleteAttribute"]);
    Route::post("/toggleAttributeActive", [CustomAttributeController::class, "toggleAttributeActive"]);

    // User Dashboard 
    Route::get("/myAccount", [UserDashboardController::class, "index"]);

    // myOrder
    Route::get("/myOrder", [MyOrderController::class, "index"]);
    Route::get("/userOrder/{id}", [MyOrderController::class, "userOrderDetail"]);

    //wishlist
    Route::get("/wishlist", [WishlistController::class, "index"]);
    Route::post("/deleteWishListitem", [WishlistController::class, "deleteWishListItem"]);
    Route::post("/addWishlistProd", [WishlistController::class, "addWishListItem"]);

    //review
    Route::get("/reviews", [ReviewController::class, "index"]);
    Route::post("/addReview", [ReviewController::class, "addReview"]);
});


//Ecommerce
Route::middleware('auth')->group(function () {
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
