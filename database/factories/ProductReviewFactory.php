<?php

namespace Database\Factories;

use App\Models\ProductReview;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductReview>
 */
class ProductReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = ProductReview::class;
    public function definition(): array
    {
        return [
            //
            "product_id" => rand(1,200),
            "user_id" => rand(1,20),
            "rating" =>rand(1,5),
            'review' => fake()->text(500)
        ];
    }
}
