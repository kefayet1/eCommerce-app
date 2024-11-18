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
        $userRole = Role::create(['name' => 'user']);
        $manager = Role::create(['name' => 'manager']);
        $admin->assignRole('admin');

        Category::create([
            'name' => 'Electronics',
            'user_id' => rand(1, 20)
        ]);
        Category::create([
            'name' => 'Mobile',
            'user_id' => rand(1, 20)
        ]);
        Category::create([
            'name' => 'Television',
            'user_id' => rand(1, 20)
        ]);
        Category::create([
            'name' => 'Bike',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'electronics',
            'user_id' => rand(1, 20)
        ]);


        Category::create([
            'name' => "Man's Fashion",
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Home And Lifestyle',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Babies And Toys',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Electronics Accessories',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Vehicle & Accessories',
            'user_id' => rand(1, 20)
        ]);

        Product::factory(200)->create();
        Order::factory(200)->create();
        OrderItem::factory(200)->create();
        Customer::factory(200)->create();
        Transaction::factory(200)->create();
    }
}
