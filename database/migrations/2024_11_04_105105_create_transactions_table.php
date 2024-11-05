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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('total', 100);
            $table->string('vat', 100);
            $table->string('payable', 100);
            $table->string('val_id', 100)->default(0);
            $table->string("tran_id", 200);
            $table->string('payment_method', 100)->nullable();
            $table->string('currency', 20);
            $table->string('person_id', 100)->nullable();
            $table->enum("payment_status", ['pending', 'completed', 'failed', 'canceled']);
            $table->foreignId('order_id')->references('id')->on('orders')
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
