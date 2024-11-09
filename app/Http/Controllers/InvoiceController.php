<?php

namespace App\Http\Controllers;

use App\Models\Customer;
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
        $invoices = DB::table("invoices")
            ->leftJoin("customers", "invoices.customer_id", "=", "customers.id")
            ->select("invoices.id", "invoices.total", "invoices.discount", "invoices.vat", "invoices.payable", "customers.name", "customers.mobile")
            ->paginate(10);

        return Inertia::render("Dashboard/Invoice", ['invoices' => $invoices]);
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

    public function getInvoice($invoiceId)
    {
        $invoice = DB::table("invoices")
            ->leftJoin("invoice_products", "invoices.id", "=", "invoice_products.invoice_id")
            ->leftJoin("customers", "invoices.customer_id", "=", "customers.id")
            ->where("invoices.id", "=", $invoiceId)
            ->first();

        $invoice_product = DB::table("invoice_products")
            ->leftJoin("products", "invoice_products.product_id", "=", "products.id")
            ->where("invoice_products.invoice_id", "=", $invoiceId)
            ->get();

        return Inertia::render("Dashboard/InvoiceModal", ["invoice" => $invoice, "products" => $invoice_product]);
    }

    public function invoicePdf()
    {
        return Inertia::render("Dashboard/InvoicePdf");
    }

    public function deleteInvoice(Request $request)
    {
        Invoice::where('user_id', "=", Auth::user()->id)
            ->where('id', '=', $request->input('id'))->delete();
        ;
    }
}
