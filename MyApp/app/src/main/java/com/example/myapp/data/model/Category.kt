package com.example.myapp.data.model

import com.google.gson.annotations.SerializedName

data class Category(
    val id: String,
    val title: String,
    @SerializedName("created_at") val createdAt: String,
    @SerializedName("updated_at") val updatedAt: String,
    @SerializedName("total_product") val totalProducts: String? = null,
)

data class CategoryResponse(
    val code: Int,
    val description: String,
    val data: List<Category>
)