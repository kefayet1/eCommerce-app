<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Customer;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(20)->create();
        User::factory()->create([
            'name' => 'kefayet',
            'email' => 'kefayeturrahman492@gmail.com',
            'password' => '12345678'
        ]);

        Category::create([
            'name' => 'clothes',
            'user_id' => rand(1,20)
        ]);
        Category::create([
            'name' => 'watches',
            'user_id' => rand(1,20)
        ]);
        Category::create([
            'name' => 'food',
            'user_id' => rand(1,20)
        ]);
        Category::create([
            'name' => 'baby',
            'user_id' => rand(1,20)
        ]);
        Category::create([
            'name' => 'men',
            'user_id' => rand(1,20)
        ]);

        Category::create([
            'name' => 'electronics',
            'user_id' => rand(1,20)
        ]);


        Category::create([
            'name' => 'mobile',
            'user_id' => rand(1,20)
        ]);

        Category::create([
            'name' => 'books',
            'user_id' => rand(1,20)
        ]);

        Category::create([
            'name' => 'Health',
            'user_id' => rand(1,20)
        ]);

        Category::create([
            'name' => 'Beauty',
            'user_id' => rand(1,20)
        ]);

        Category::create([
            'name' => 'Bags',
            'user_id' => rand(1,20)
        ]);

        
        Customer::factory(200)->create();
        Product::factory(200)->create();
    }
}
