<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $fillable = ['total', 'vat', 'payable', 'val_id', 'tran_id', 'payment_method', 'currency', 'person_id', 'payment_status', 'order_id'];
}
