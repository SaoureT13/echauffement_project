package com.example.myapp.data.model

import com.google.gson.annotations.SerializedName

data class ProductResponse(
    val code: Int,
    val description: String,
    val data: ProductData
)

data class ProductData(
    val products: List<Product>,
    val page: Page
)

data class Product(
    val id: String,
    val name: String,
    val price: Float,
    val stock: Int,
    @SerializedName("created_at") val createdAt: String,
    @SerializedName("updated_at") val updatedAt: String,
    val image: String?,
    val category: Category
)

data class Page(
    @SerializedName("currentPage") val currentPage: Int,
    val limit: Int,
    val total: Int,
    @SerializedName("totalPages") val totalPages: Int
)