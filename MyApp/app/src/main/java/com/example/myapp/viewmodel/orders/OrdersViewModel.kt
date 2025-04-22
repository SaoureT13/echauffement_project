package com.example.myapp.viewmodel.orders

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapp.data.model.Order
import com.example.myapp.data.repository.DataRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class OrdersViewModel(private val repository: DataRepository = DataRepository()) : ViewModel() {
    var orders by mutableStateOf<List<Order>>(emptyList())
        private set
    var errorMessage by mutableStateOf<String?>(null)
        private set

    fun fetchOrders() {
        viewModelScope.launch(Dispatchers.IO) {
            repository.getOrders().fold(
                onSuccess = { orders = it; errorMessage = null },
                onFailure = { errorMessage = it.message }
            )
        }
    }
}