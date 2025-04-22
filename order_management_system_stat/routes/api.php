<?php

use App\Http\Controllers\StatController;
use Illuminate\Support\Facades\Route;

Route::get('/sales-by-product', [StatController::class, 'salesByProduct']);
Route::get('/orders-per-month', [StatController::class, 'ordersPerMonth']);
Route::get('/top-customers', [StatController::class, 'topCustomers']);
