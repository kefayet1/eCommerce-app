<?php

namespace Database\Factories;

use App\Models\OrderItem;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\transaction>
 */
class transactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected  $model = Transaction::class;
    public function definition(): array
    {
        $item = OrderItem::find(rand(1,200));
        return [
            //
            'vat' => 5,
            'total' => $item->sale_price,
            'payable' => $item->sale_price,
            'tran_id' => uniqid(),
            'payment_method' => fake()->boolean() ? "paypal" : "stripe",
            'currency' => "BDT",
            'order_id' => $item->id,
            'payment_status' => fake()->boolean() ? 'completed' : "pending"
        ];
    }
}
