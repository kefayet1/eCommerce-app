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
        return [
            //
            'name' => fake()->name(),
            'price' => fake()->randomNumber(3),
            'unit' => fake()->randomNumber(5),
            'img_url' => 'https://random-image-pepebigotes.vercel.app/api/random-image',
            'user_id' => rand(1, 20),
            'category_id' => rand(1, 10)
        ];
    }
}
