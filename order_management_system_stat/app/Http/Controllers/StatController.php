<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatController extends Controller
{

    public function salesByProduct()
    {
        $sales = Product::select(
            'products.name',
            DB::raw('SUM(order_details.quantity * order_details.unit_price) as total_amount')
        )
            ->join('order_details', 'products.id', '=', 'order_details.product_id')
            ->groupBy('products.id', 'products.name')
            ->orderBy('total_amount', 'desc')
            ->get();

        return response()->json([
            'data' => $sales,
        ]);
    }


    public function ordersPerMonth(Request $request)
    {
        $year = $request->query('year', date('Y')); 

        $orders = Order::select(
            DB::raw("DATE_PART('month', created_at) as month"),
            DB::raw('COUNT(*) as order_count')
        )
            ->whereYear('created_at', $year)
            ->groupBy(DB::raw("DATE_PART('month', created_at)"))
            ->orderBy('month')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->month => $item->order_count];
            });

        // Ensure all months are included (1-12) with 0 counts if no orders
        $result = [];
        for ($month = 1; $month <= 12; $month++) {
            $result[$month] = $orders->get($month, 0);
        }

        return response()->json([
            'year' => (int) $year,
            'data' => $result,
        ]);
    }


    public function topCustomers()
    {
        $customers = Customer::select(
            'customers.id',
            'customers.name',
            DB::raw('COUNT(orders.id) as order_count'),
            DB::raw('SUM(order_details.quantity * order_details.unit_price) as total_amount')
        )
            ->join('orders', 'customers.id', '=', 'orders.customer_id')
            ->join('order_details', 'orders.id', '=', 'order_details.order_id')
            ->groupBy('customers.id', 'customers.name')
            ->orderBy('order_count', 'desc')
            ->orderBy('total_amount', 'desc')
            ->limit(10)
            ->get();

        return response()->json([
            'data' => $customers,
        ]);
    }
}
