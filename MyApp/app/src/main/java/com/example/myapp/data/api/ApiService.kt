package com.example.myapp.data.api

import com.example.myapp.data.model.CategoryResponse
import com.example.myapp.data.model.CustomerResponse
import com.example.myapp.data.model.OrderResponse
import com.example.myapp.data.model.ProductResponse
import retrofit2.http.GET
import retrofit2.http.Query

interface ApiService {
    @GET("api/orders")
    suspend fun getOrders(
        @Query("limit") limit: Int = 999999
    ): OrderResponse

    @GET("api/customers")
    suspend fun getCustomers(
        @Query("limit") limit: Int = 99999,
    ): CustomerResponse

    @GET("api/products")
    suspend fun getProducts(
        @Query("limit") limit: Int = 99999
    ): ProductResponse

    @GET("api/categories")
    suspend fun getCategories(
    ): CategoryResponse

}