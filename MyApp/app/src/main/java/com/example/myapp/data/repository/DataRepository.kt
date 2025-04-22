package com.example.myapp.data.repository

import com.example.myapp.data.api.RetrofitClient
import com.example.myapp.data.model.Category
import com.example.myapp.data.model.Customer
import com.example.myapp.data.model.Order
import com.example.myapp.data.model.Product

class DataRepository {
    private val apiService = RetrofitClient.apiService

    suspend fun getOrders(): Result<List<Order>> {
        return try {
            val response = apiService.getOrders()
            if (response.code == 200) {
                Result.success(response.data.orders)
            } else {
                Result.failure(Exception(response.description))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getCategories(): Result<List<Category>> {
        return try {
            val response = apiService.getCategories()
            if (response.code == 200) {
                Result.success(response.data)
            } else {
                Result.failure(Exception(response.description))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getCustomers(): Result<List<Customer>> {
        return try {
            val response = apiService.getCustomers()
            if (response.code == 200) {
                Result.success(response.data.customers)
            } else {
                Result.failure(Exception(response.description))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getProducts(): Result<List<Product>> {
        return try {
            val response = apiService.getProducts()
            if (response.code == 200) {
                Result.success(response.data.products)
            } else {
                Result.failure(Exception(response.description))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}