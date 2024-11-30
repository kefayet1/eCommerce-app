<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryVariation extends Model
{
    use HasFactory;
    protected $fillable = ['category_id', 'variation_type_id'];
}
