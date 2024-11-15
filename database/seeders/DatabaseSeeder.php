<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\Transaction;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(20)->create();
        $admin = User::create([
            'name' => 'kefayet',
            'email' => 'kefayet52@gmail.com',
            'password' => bcrypt('12345678')
        ]);

        

        $role = Role::create(['name' => 'admin']); 
        $admin->assignRole('admin');

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

        Product::factory(200)->create();
        Order::factory(200)->create();
        OrderItem::factory(200)->create();
        Customer::factory(200)->create();
        Transaction::factory(200)->create();
    }
}
