<?php
namespace App\Http\Helper;

use Illuminate\Support\Facades\DB;


class StripeHelper
{
    static function createStripeOrder($auth, $tran_id, $order_id, $convertDollar)
    {
        $stripe = new \Stripe\StripeClient(config('stripe.stripe_sk'));
        $response = $stripe->checkout->sessions->create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => $auth->name,
                        ],
                        'unit_amount' => (int) $convertDollar
                    ],
                    'quantity' => 2,
                ]
            ],
            'mode' => 'payment',
            'success_url' => route("stripeSuccess", ["transactionId" => $tran_id, 'orderId' => $order_id]),
            'cancel_url' => "https://laravel.com/docs/11.x/billing",
        ]);
        return $response;
    }

    static function success($request, $transitionId, $orderId){
        $changePaymentStatus = DB::table("transactions")
            ->where("order_id", "=", $orderId)
            ->where("tran_id", "=", $transitionId)
            ->update([
                'payment_status' => "completed",
                'currency' => "USD",
                'payment_method' => 'stripe'
            ]);

        return $changePaymentStatus;
    }
}