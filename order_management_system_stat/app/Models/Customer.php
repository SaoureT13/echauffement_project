<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        email,
	phone,
	name,
	address,
	id
    ];

    public function orders()
    {
        return $this->hasMany(Order::class, 'customer_id');
    }
}
