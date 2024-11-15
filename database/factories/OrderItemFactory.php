<?php

namespace Database\Factories;

use App\Models\OrderItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = OrderItem::class;
    public function definition(): array
    {
        return [
            //
            'sale_price' => rand(200, 5000),
            'qty' => rand(1, 8),
            'order_id' => rand(1, 200),
            'product_id' => rand(1, 200),
            'user_id' => rand(1, 20)
        ];
    }
}
