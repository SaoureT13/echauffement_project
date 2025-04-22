package com.example.myapp.viewmodel.products

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapp.data.model.Product
import com.example.myapp.data.repository.DataRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class ProductsViewModel(private val repository: DataRepository = DataRepository()) : ViewModel() {
    var products by mutableStateOf<List<Product>>(emptyList())
        private set
    var errorMessage by mutableStateOf<String?>(null)
        private set

    fun fetchProducts() {
        viewModelScope.launch(Dispatchers.IO) {
            repository.getProducts().fold(
                onSuccess = { products = it; errorMessage = null },
                onFailure = { errorMessage = it.message }
            )
        }
    }
}