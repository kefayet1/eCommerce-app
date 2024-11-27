<?php

namespace Database\Factories;

use App\Models\User;
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
        $remark = ["popular", "new", "top", "featured", "trending", "regular"];
        return [
            //
            'name' => fake()->name(),
            'price' => fake()->randomNumber(4),
            'unit' => fake()->randomNumber(5),
            "short_des" => fake()->text(250),
            "discount" => fake()->boolean(),
            "discount_price" => $boolean ? fake()->randomNumber(2) : "",
            "star" => fake()->randomFloat(1,5),
            "remark" => $remark[rand(0,5)],
            'img_url' => 'https://random-image-pepebigotes.vercel.app/api/random-image',
            'user_id' => User::factory()->create()->id,
            'category_id' => rand(1, 10)
        ];
    }
}
