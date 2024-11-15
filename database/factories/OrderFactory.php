<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Order::class;
    public function definition(): array
    {
        return [
            //
            'ship_details' => 'Name:kefayetur rahman,Address:vill:chittagong, p/s: feni, p/o: fazilkarhat,City:Chittagong,Phone:0768856745,Zip Code:1200',
            'delivery_status' => 'pending',
            'user_id' => rand(1,20),
        ];
    }
}
