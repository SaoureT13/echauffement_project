package com.example.order_management_system.repository

import com.example.order_management_system.models.Product
import com.example.order_management_system.services.ApiService

class ProductsRepository(private val apiService: ApiService) {
    suspend fun getProducts(): List<Product> {
        return try {
            val response = apiService.getProducts()
            response.data.products ?: emptyList()
        } catch (_: Exception) {
            emptyList()
        }
    }
}