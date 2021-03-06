<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['product_name', 'product_brand', 'product_description', 'alert_stock','count_in_stock','price'];
}
