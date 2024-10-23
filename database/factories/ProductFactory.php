<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $boolean = fake()->boolean();
        return [
            //
            'name' => fake()->name(),
            'price' => fake()->randomNumber(4),
            'unit' => fake()->randomNumber(5),
            "short_des" => fake()->text(250),
            "discount" => fake()->boolean(),
            "discount_price" => $boolean ? fake()->randomNumber(2) : "",
            "star" => fake()->randomFloat(1,5),
            "remark" => fake()->boolean() ? "popular" : "new",
            'img_url' => 'https://random-image-pepebigotes.vercel.app/api/random-image',
            'user_id' => rand(1, 20),
            'category_id' => rand(1, 10)
        ];
    }
}
