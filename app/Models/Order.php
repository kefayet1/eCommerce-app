<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['total', 'vat', 'payable', "tran_id", 'ship_details', 'val_id', 'payment_status', 'delivery_status', 'user_id'];
}
