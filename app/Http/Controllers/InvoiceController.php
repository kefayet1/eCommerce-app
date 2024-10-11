<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\InvoiceProduct;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    //
    public function index(Request $request)
    {
        return Inertia::render("Dashboard/SalePage");
    }

    public function createInvoice(Request $request)
    {
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
                    'product_id' => $singleProduct['product_id'],
                    'qty' => $singleProduct['qty'],
                    'sale_price' => $singleProduct['sale_price']
                ]);
            }

            DB::commit();
            return 1;
        } catch (Exception $e) {
            DB::rollBack();
            return 0;
        }
    }
}
