<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Models\InvoiceProduct;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Exception;

class SalePageController extends Controller
{
    //

    public function index(Request $request)
    {
        $product = DB::table("products")
            ->where('products.user_id', '=', Auth::user()->id)
            ->select("products.name as productName", "products.price", "products.unit", "products.created_at", "products.id")
            ->paginate(10, ['*'], 'customers_page');
        $customer = DB::table("customers")
            ->where("user_id", "=", Auth::user()->id)
            ->select('customers.id', 'customers.name', 'customers.email')
            ->paginate(10, ['*'], 'products_page');

        return Inertia::render("Dashboard/SalePage", ['products' => $product, 'customers' => $customer]);
    }

    public function createInvoice(Request $request)
    {
        // dd($request->input("customer_id"));
        DB::beginTransaction();

        try {
            $invoice = Invoice::create([
                'total' => $request->input("total"),
                'discount' => $request->input("discount"),
                'vat' => $request->input('vat'),
                'payable' => $request->input("payable"),
                'user_id' => Auth::user()->id,
                'customer_id' => $request->input("customer_id")
            ]);

            $invoiceId = $invoice->id;

            $products = $request->input('products');

            foreach ($products as $singleProduct) {
                InvoiceProduct::create([
                    'invoice_id' => $invoiceId,
                    'user_id' => Auth::user()->id,
                    'product_id' => $singleProduct['id'],
                    'qty' => $singleProduct['unit'],
                    'sale_price' => $singleProduct['totalPrice']
                ]);
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            return 0;
        }
    }
}
