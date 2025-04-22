package com.example.myapp.viewmodel.categories

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapp.data.model.Category
import com.example.myapp.data.repository.DataRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class CategoriesViewModel(private val repository: DataRepository = DataRepository()) : ViewModel() {
    var categories by mutableStateOf<List<Category>>(emptyList())
        private set
    var errorMessage by mutableStateOf<String?>(null)
        private set

    fun fetchCategories() {
        viewModelScope.launch(Dispatchers.IO) {
            repository.getCategories().fold(
                onSuccess = { categories = it; errorMessage = null },
                onFailure = { errorMessage = it.message }
            )
        }
    }
}