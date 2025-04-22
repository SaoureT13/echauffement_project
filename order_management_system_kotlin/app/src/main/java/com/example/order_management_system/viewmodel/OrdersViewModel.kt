package com.example.order_management_system.viewmodel

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.order_management_system.models.orders.Order
import com.example.order_management_system.models.orders.Orders
import com.example.order_management_system.models.orders.Page
import com.example.order_management_system.repository.OrdersRepository
import com.example.order_management_system.services.ResultApi
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.flow.update


class OrdersViewModel(private val repository: OrdersRepository) : ViewModel() {

    private val _orders = MutableStateFlow<List<Order>>(emptyList())
    val orders = _orders.asStateFlow()
    private val _pageInfo = MutableStateFlow<Page?>(null)
    val pageInfo = _pageInfo.asStateFlow()
    private val _isLoading = MutableStateFlow(false)
    val isLoading = _isLoading.asStateFlow()

    private val _showErrorToastChannel = Channel<Boolean>()
    val showErrorToastChannel = _showErrorToastChannel.receiveAsFlow()


    init {
        fetchOrders()
    }

    fun fetchOrders() {
        viewModelScope.launch {
            _isLoading.value = true
            repository.getOrders().collectLatest { result ->
                when (result) {
                    is ResultApi.Error<*> -> {
                        _showErrorToastChannel.send(true)
                    }

                    is ResultApi.Success<Orders> -> {
                        result.data?.let { orders ->
                            _orders.update { orders.data.orders }
                            _pageInfo.update { orders.data.page }
                        }
                    }
                }
            }
            _isLoading.update { false }
        }
    }
}