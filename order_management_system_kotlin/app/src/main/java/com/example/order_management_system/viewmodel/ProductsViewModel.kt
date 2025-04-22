package com.example.order_management_system.viewmodel

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.order_management_system.models.PageInfo
import com.example.order_management_system.models.Product
import com.example.order_management_system.repository.ProductsRepository
import kotlinx.coroutines.launch

class ProductsViewModel(private val repository: ProductsRepository) : ViewModel() {
    var products = mutableStateOf<List<Product>>(emptyList())
    var pageInfo = mutableStateOf<PageInfo?>(null)
    var isLoading = mutableStateOf(false)

    init {
        fetchProducts()
    }

    fun fetchProducts() {
        viewModelScope.launch {
            isLoading.value = true
            try {
                val response = repository.getProducts()
                products.value = response
                // Pour gérer la pagination, vous pourriez stocker pageInfo ici
                // pageInfo.value = response.data.page
            } catch (e: Exception) {
                products.value = emptyList()
            }
            isLoading.value = false
        }
    }
}