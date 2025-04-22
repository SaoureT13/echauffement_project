package com.example.myapp.viewmodel.customers

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapp.data.model.Customer
import com.example.myapp.data.repository.DataRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class CustomersViewModel(private val repository: DataRepository = DataRepository()) : ViewModel() {
    var customers by mutableStateOf<List<Customer>>(emptyList())
        private set
    var errorMessage by mutableStateOf<String?>(null)
        private set

    fun fetchCustomers() {
        viewModelScope.launch(Dispatchers.IO) {
            repository.getCustomers().fold(
                onSuccess = { customers = it; errorMessage = null },
                onFailure = { errorMessage = it.message }
            )
        }
    }
}