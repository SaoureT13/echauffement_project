package com.example.myapp.data.model

import com.google.gson.annotations.SerializedName

data class OrderResponse(
    val code: Int,
    val description: String,
    val data: OrderData
)

data class OrderData(
    val orders: List<Order>,
    val page: Page
)

data class Order(
    val id: String,
    val status: String,
    @SerializedName("created_at") val createdAt: String,
    @SerializedName("updated_at") val updatedAt: String,
    val customer: Customer,
    val products: List<OrderProduct>
)

data class OrderProduct(
    @SerializedName("order_details_id") val orderDetailsId: String,
    val id: String,
    val name: String,
    val quantity: Int,
    @SerializedName("unit_price") val unitPrice: Int,
    val image: String?
)