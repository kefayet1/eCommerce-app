<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price', 'unit', 'img_url', 'user_id', 'category_id'];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
