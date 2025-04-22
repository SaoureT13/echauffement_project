package com.example.myapp.data.model

import com.google.gson.annotations.SerializedName

data class CustomerResponse(
    val code: Int,
    val description: String,
    val data: CustomerData
)

data class CustomerData(
    val customers: List<Customer>,
    val page: Page
)

data class Customer(
    val id: String,
    val name: String,
    val email: String,
    val address: String? = null,
    @SerializedName("created_at") val createdAt: String? = null,
    @SerializedName("updated_at") val updatedAt: String? = null,
    val phone: String? = null,
    @SerializedName("orders_count") val ordersCount: String? = null
)