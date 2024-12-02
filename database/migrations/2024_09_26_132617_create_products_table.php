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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->text("short_des");
            $table->decimal('price', 12, 2);
            $table->boolean("discount");
            $table->string("discount_price", 50);
            $table->string('unit', 50);
            $table->float("star");
            $table->enum("remark", ["popular", "new", "top", "featured", "trending", "regular"]);
            $table->string('img_url', 100);

            $table->foreignId("user_id")->constrained('users')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('categories')
                ->cascadeOnUpdate()->cascadeOnDelete();

            $table->foreignId("brand_id")->nullable()->references("id")->on('brands')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
