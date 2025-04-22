package com.example.order_management_system.repository

import com.example.order_management_system.models.Customer
import com.example.order_management_system.services.ApiService

class CustomersRepository(private val apiService: ApiService) {
    suspend fun getCustomers(): List<> {
        return try {
            val response = apiService.getCustomers()
            response.data.customers ?: emptyList()
        } catch (e: Exception) {
            emptyList()
        }
    }
}