<?php
namespace App\Http\Helper;

use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class Paypal
{
    static function createPaypalOrder($tran_id, $orderId, $convertDollar, $ship_details, $phone)
    {
        // dd($convertDollar);
        $provider = new PayPalClient();
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        $response = $provider->createOrder([
            'intent' => "CAPTURE",
            "application_context" => [
                "return_url" => route('paypalSuccess', ['transactionId' => $tran_id, 'orderId' => $orderId]),
                'cancel_url' => "https://hellobangladesh.com"
            ],
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => number_format((float) $convertDollar, 2, '.', '')
                    ],
                ]
            ]
        ]);

        // dd($response);

        if (!empty($response['id'])) {
            foreach ($response['links'] as $item) {
                if ($item['rel'] === "approve") {
                    return $item['href'];
                }
            }
        }
    }

    static function success($request, $transitionId, $orderId)
    {

        $changePaymentStatus = DB::table("transactions")
            ->where("order_id", "=", $orderId)
            ->where("tran_id", "=", $transitionId)
            ->update([
                'tran_id' => $request->query('token'),
                'person_id' => $request->query('PayerID'),
                'payment_status' => "completed",
                'currency' => "USD",
                'payment_method' => 'paypal'
            ]);

        return $changePaymentStatus;
    }
}