<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->string('sale_price', 200);
            $table->string('qty', 200);
            $table->foreignId('order_id')->references('id')->on('orders')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('product_id')->references('id')->on('products')
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('user_id')->references('id')->on('users')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
