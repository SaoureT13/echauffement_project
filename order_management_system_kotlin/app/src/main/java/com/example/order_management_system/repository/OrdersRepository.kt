package com.example.order_management_system.repository

import com.example.order_management_system.models.orders.Order
import com.example.order_management_system.models.orders.Orders
import com.example.order_management_system.services.ApiService
import kotlinx.coroutines.flow.Flow

//class OrdersRepository(private val apiService: ApiService) {
//    suspend fun getOrders(): List<Order> {
//        return try {
//            val response = apiService.getOrders()
//            response.data.orders ?: emptyList()
//        } catch (e: Exception) {
//            emptyList()
//        }
//    }
//}

interface OrdersRepository{
    suspend fun getOrders(): Flow<Result<Orders>>
}