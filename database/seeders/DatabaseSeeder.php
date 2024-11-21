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

        $electronicsCate = Category::create([
            'name' => 'Electronics',
            'user_id' => rand(1, 20)
        ]);

        $camera = Category::create([
            'name' => 'camera',
            'user_id' => rand(1, 20),
            "parent_id" => $electronicsCate->id
        ]);

        Category::create([
            'name' => 'canon',
            'user_id' => rand(1, 20),
            "parent_id" => $camera->id
        ]);

        Category::create([
            'name' => 'Computer And Laptop',
            'user_id' => rand(1, 20),
            "parent_id" => $electronicsCate->id
        ]);

        Category::create([
            'name' => 'Gaming Desktop',
            'user_id' => rand(1, 20),
            "parent_id" => $electronicsCate->id
        ]);

        Category::create([
            'name' => 'Computer Accessories',
            'user_id' => rand(1, 20),
            "parent_id" => $electronicsCate->id
        ]);

        $mobile = Category::create([
            'name' => 'Mobile',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Mobile Phone Accessories',
            'user_id' => rand(1, 20),
            "parent_id" => $mobile->id
        ]);

        Category::create([
            'name' => 'Samsung',
            'user_id' => rand(1, 20),
            "parent_id" => $mobile->id
        ]);

        Category::create([
            'name' => 'Iphone',
            'user_id' => rand(1, 20),
            "parent_id" => $mobile->id
        ]);

        Category::create([
            'name' => 'Television',
            'user_id' => rand(1, 20)
        ]);

        // Electronics -> Computer and Laptop
        $computerLaptop = Category::create([
            'name' => 'Computer and Laptop',
            'user_id' => rand(1, 20),
            'parent_id' => $electronicsCate->id
        ]);

        Category::create([
            'name' => 'Gaming Desktop',
            'user_id' => rand(1, 20),
            'parent_id' => $computerLaptop->id
        ]);

        Category::create([
            'name' => 'MacBook',
            'user_id' => rand(1, 20),
            'parent_id' => $computerLaptop->id
        ]);

        // Main Category: Fashion

        // Fashion -> Men
        $menFashion = Category::create([
            'name' => "Men's Fashion",
            'user_id' => rand(1, 20)
        ]);

        // Men -> Clothing
        $menClothing = Category::create([
            'name' => 'Clothing',
            'user_id' => rand(1, 20),
            'parent_id' => $menFashion->id
        ]);

        Category::create([
            'name' => 'T-Shirts',
            'user_id' => rand(1, 20),
            'parent_id' => $menClothing->id
        ]);

        Category::create([
            'name' => 'Shirts',
            'user_id' => rand(1, 20),
            'parent_id' => $menClothing->id
        ]);

        Category::create([
            'name' => 'Jeans',
            'user_id' => rand(1, 20),
            'parent_id' => $menClothing->id
        ]);

        Category::create([
            'name' => 'Jackets',
            'user_id' => rand(1, 20),
            'parent_id' => $menClothing->id
        ]);

        Category::create([
            'name' => 'Suits',
            'user_id' => rand(1, 20),
            'parent_id' => $menClothing->id
        ]);

        // Men -> Footwear
        $menFootwear = Category::create([
            'name' => 'Footwear',
            'user_id' => rand(1, 20),
            'parent_id' => $menFashion->id
        ]);

        Category::create([
            'name' => 'Casual Shoes',
            'user_id' => rand(1, 20),
            'parent_id' => $menFootwear->id
        ]);

        Category::create([
            'name' => 'Formal Shoes',
            'user_id' => rand(1, 20),
            'parent_id' => $menFootwear->id
        ]);

        Category::create([
            'name' => 'Sneakers',
            'user_id' => rand(1, 20),
            'parent_id' => $menFootwear->id
        ]);

        Category::create([
            'name' => 'Boots',
            'user_id' => rand(1, 20),
            'parent_id' => $menFootwear->id
        ]);

        // Men -> Accessories
        $menAccessories = Category::create([
            'name' => 'Accessories',
            'user_id' => rand(1, 20),
            'parent_id' => $menFashion->id
        ]);

        Category::create([
            'name' => 'Watches',
            'user_id' => rand(1, 20),
            'parent_id' => $menAccessories->id
        ]);

        Category::create([
            'name' => 'Belts',
            'user_id' => rand(1, 20),
            'parent_id' => $menAccessories->id
        ]);

        Category::create([
            'name' => 'Sunglasses',
            'user_id' => rand(1, 20),
            'parent_id' => $menAccessories->id
        ]);

        Category::create([
            'name' => 'Hats & Caps',
            'user_id' => rand(1, 20),
            'parent_id' => $menAccessories->id
        ]);

        // Men -> Grooming
        $menGrooming = Category::create([
            'name' => 'Grooming',
            'user_id' => rand(1, 20),
            'parent_id' => $menFashion->id
        ]);

        Category::create([
            'name' => 'Skincare',
            'user_id' => rand(1, 20),
            'parent_id' => $menGrooming->id
        ]);

        Category::create([
            'name' => 'Fragrances',
            'user_id' => rand(1, 20),
            'parent_id' => $menGrooming->id
        ]);

        Category::create([
            'name' => 'Shaving & Beard Care',
            'user_id' => rand(1, 20),
            'parent_id' => $menGrooming->id
        ]);

        Category::create([
            'name' => 'Hair Styling',
            'user_id' => rand(1, 20),
            'parent_id' => $menGrooming->id
        ]);

        // Fashion -> Women
        $womenFashion = Category::create([
            'name' => "Women's Fashion",
            'user_id' => rand(1, 20),
            'parent_id' => null
        ]);

        // Women -> Clothing
        $womenClothing = Category::create([
            'name' => 'Clothing',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFashion->id
        ]);

        Category::create([
            'name' => 'Dresses',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        Category::create([
            'name' => 'Tops & Blouses',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        Category::create([
            'name' => 'Skirts',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        Category::create([
            'name' => 'Jeans & Pants',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        Category::create([
            'name' => 'Sweaters & Cardigans',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        Category::create([
            'name' => 'Jackets & Coats',
            'user_id' => rand(1, 20),
            'parent_id' => $womenClothing->id
        ]);

        // Women -> Footwear
        $womenFootwear = Category::create([
            'name' => 'Footwear',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFashion->id
        ]);

        Category::create([
            'name' => 'Heels',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFootwear->id
        ]);

        Category::create([
            'name' => 'Flats',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFootwear->id
        ]);

        Category::create([
            'name' => 'Sandals',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFootwear->id
        ]);

        Category::create([
            'name' => 'Boots',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFootwear->id
        ]);

        // Women -> Accessories
        $womenAccessories = Category::create([
            'name' => 'Accessories',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFashion->id
        ]);

        Category::create([
            'name' => 'Handbags',
            'user_id' => rand(1, 20),
            'parent_id' => $womenAccessories->id
        ]);

        Category::create([
            'name' => 'Jewelry',
            'user_id' => rand(1, 20),
            'parent_id' => $womenAccessories->id
        ]);

        Category::create([
            'name' => 'Watches',
            'user_id' => rand(1, 20),
            'parent_id' => $womenAccessories->id
        ]);

        Category::create([
            'name' => 'Sunglasses',
            'user_id' => rand(1, 20),
            'parent_id' => $womenAccessories->id
        ]);

        Category::create([
            'name' => 'Scarves',
            'user_id' => rand(1, 20),
            'parent_id' => $womenAccessories->id
        ]);

        // Women -> Beauty
        $womenBeauty = Category::create([
            'name' => 'Beauty',
            'user_id' => rand(1, 20),
            'parent_id' => $womenFashion->id
        ]);

        Category::create([
            'name' => 'Makeup',
            'user_id' => rand(1, 20),
            'parent_id' => $womenBeauty->id
        ]);

        Category::create([
            'name' => 'Skincare',
            'user_id' => rand(1, 20),
            'parent_id' => $womenBeauty->id
        ]);

        Category::create([
            'name' => 'Hair Care',
            'user_id' => rand(1, 20),
            'parent_id' => $womenBeauty->id
        ]);

        Category::create([
            'name' => 'Perfumes',
            'user_id' => rand(1, 20),
            'parent_id' => $womenBeauty->id
        ]);

        Category::create([
            'name' => 'Nail Care',
            'user_id' => rand(1, 20),
            'parent_id' => $womenBeauty->id
        ]);

        // Main Category: Home and Lifestyle
        $homeLifestyle = Category::create([
            'name' => 'Home and Lifestyle',
            'user_id' => rand(1, 20)
        ]);

        // Home and Lifestyle -> Furniture
        Category::create([
            'name' => 'Furniture',
            'user_id' => rand(1, 20),
            'parent_id' => $homeLifestyle->id
        ]);

        Category::create([
            'name' => 'Home Decor',
            'user_id' => rand(1, 20),
            'parent_id' => $homeLifestyle->id
        ]);

        Category::create([
            'name' => 'Kitchen & Dining',
            'user_id' => rand(1, 20),
            'parent_id' => $homeLifestyle->id
        ]);

        Category::create([
            'name' => 'Bedding',
            'user_id' => rand(1, 20),
            'parent_id' => $homeLifestyle->id
        ]);

        Category::create([
            'name' => 'Bath',
            'user_id' => rand(1, 20),
            'parent_id' => $homeLifestyle->id
        ]);

        // Main Category: Babies and Toys
        $babiesToys = Category::create([
            'name' => 'Babies and Toys',
            'user_id' => rand(1, 20)
        ]);

        // Babies and Toys -> Baby Care
        Category::create([
            'name' => 'Baby Care',
            'user_id' => rand(1, 20),
            'parent_id' => $babiesToys->id
        ]);

        // Babies and Toys -> Toys and Games
        Category::create([
            'name' => 'Toys and Games',
            'user_id' => rand(1, 20),
            'parent_id' => $babiesToys->id
        ]);

        // Babies and Toys -> School Supplies
        Category::create([
            'name' => 'School Supplies',
            'user_id' => rand(1, 20),
            'parent_id' => $babiesToys->id
        ]);

        // Babies and Toys -> Outdoor Play
        Category::create([
            'name' => 'Outdoor Play',
            'user_id' => rand(1, 20),
            'parent_id' => $babiesToys->id
        ]);

        // Electronics Accessories
        $electronicsAccessories = Category::create([
            'name' => 'Electronics Accessories',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Chargers & Cables',
            'user_id' => rand(1, 20),
            'parent_id' => $electronicsAccessories->id
        ]);

        Category::create([
            'name' => 'Headphones & Earphones',
            'user_id' => rand(1, 20),
            'parent_id' => $electronicsAccessories->id
        ]);

        Category::create([
            'name' => 'Batteries',
            'user_id' => rand(1, 20),
            'parent_id' => $electronicsAccessories->id
        ]);

        // Vehicle & Accessories
        $vehicleAccessories = Category::create([
            'name' => 'Vehicle & Accessories',
            'user_id' => rand(1, 20)
        ]);

        Category::create([
            'name' => 'Car Accessories',
            'user_id' => rand(1, 20),
            'parent_id' => $vehicleAccessories->id
        ]);

        Category::create([
            'name' => 'Motorbike Accessories',
            'user_id' => rand(1, 20),
            'parent_id' => $vehicleAccessories->id
        ]);

        Category::create([
            'name' => 'Car Parts',
            'user_id' => rand(1, 20),
            'parent_id' => $vehicleAccessories->id
        ]);

        Product::factory(200)->create();
        Order::factory(200)->create();
        OrderItem::factory(200)->create();
        Customer::factory(200)->create();
        Transaction::factory(200)->create();
    }
}
