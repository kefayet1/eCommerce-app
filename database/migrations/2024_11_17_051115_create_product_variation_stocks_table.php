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
        Schema::create('product_variation_stocks', function (Blueprint $table) {
            $table->id();
            $table->integer('stock')->default(0);
            $table->foreignId("product_variation_id")->references("id")->on("product_variations")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId("product_id")->references("id")->on("products")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_variation_stocks');
    }
};
