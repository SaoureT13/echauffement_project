package com.example.order_management_system.viewmodel

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.order_management_system.models.Customer
import com.example.order_management_system.models.Order
import com.example.order_management_system.models.PageInfo
import com.example.order_management_system.models.Product
import com.example.order_management_system.repository.CustomersRepository
import com.example.order_management_system.repository.OrdersRepository
import com.example.order_management_system.repository.ProductsRepository
import kotlinx.coroutines.launch

class CustomersViewModel(private val repository: CustomersRepository) : ViewModel() {
    var customers = mutableStateOf<List<Customer>>(emptyList())
    var pageInfo = mutableStateOf<PageInfo?>(null)
    var isLoading = mutableStateOf(false)

    init {
        fetchCustomers()
    }

    fun fetchCustomers() {
        viewModelScope.launch {
            isLoading.value = true
            try {
                val response = repository.getCustomers()
                customers.value = response
                // Pour gérer la pagination, vous pourriez stocker pageInfo ici
                // pageInfo.value = response.data.page
            } catch (_: Exception) {
                customers.value = emptyList()
            }
            isLoading.value = false
        }
    }
}