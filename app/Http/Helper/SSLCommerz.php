<?php
namespace App\Http\Helper;

use App\Models\Order;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class SSLCommerz
{
    static function InitiatePayment($auth, $payable, $tran_id, $ship_details)
    {
        try {
            $response = Http::asForm()->post("https://sandbox.sslcommerz.com/gwprocess/v4/api.php", [
                "store_id" => "blomb671f9e726885a",
                "store_passwd" => "blomb671f9e726885a@ssl",
                "total_amount" => $payable,
                "tran_id" => $tran_id,
                "currency" => "BDT",
                "success_url" => route("sslCommerzSuccess"),
                'fail_url' => "http://127.0.0.1:8000/paymentFail",
                "cancel_url" => "http://127.0.0.1:8000/paymentCancel",
                "ipn_url" => "http://127.0.0.1:8000/paymentIpn",
                'cus_name' => $auth->name,
                'cus_email' => $auth->email,
                'cus_add1' => $ship_details,
                'cus_add2' => $ship_details,
                "cus_city" => "chittagong",
                "cus_state" => "chittagong",
                'cus_postcode' => "1200",
                'cus_country' => "Bangladesh",
                "cus_phone" => "0349302938",
                "cus_fax" => "0349302938",
                "shipping_method" => "YES",
                'ship_name' => $auth->name,
                'ship_email' => $auth->email,
                'ship_add1' => $ship_details,
                'ship_add2' => $ship_details,
                "ship_city" => "chittagong",
                "ship_state" => "chittagong",
                'ship_postcode' => "1200",
                'ship_country' => "Bangladesh",
                "ship_phone" => "0349302938",
                "ship_fax" => "0349302938",
                "product_name" => "Apple Shop Product",
                "product_category" => "Apple shop category",
                "product_profile" => "Apple shop Profile",
                "product_amount" => $payable
            ]);
            return $response->json();
        } catch (\Throwable $th) {
            //throw $th;
            dd($th);
        }

    }

    static function InitiateSuccess($tran_id)
    {
        Order::where('tran_id', "=", $tran_id)->where("val_id", "=", 0)->update(['payment_status' => "completed"]);
        return 1;
    }
}