package com.example.myapp.ui.screens.categories

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.material3.CardDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.myapp.ui.theme.Outfit
import com.example.myapp.viewmodel.categories.CategoriesViewModel

@Composable
fun CategoriesScreen(viewModel: CategoriesViewModel = viewModel()) {
    LaunchedEffect(Unit) {
        viewModel.fetchCategories()
    }

    Scaffold(floatingActionButton = {
        FloatingActionButton(
            onClick = { viewModel.fetchCategories() },
            containerColor = Color(0xFF4361EE),
            contentColor = Color.White
        ) {
            Icon(
                imageVector = Icons.Default.Refresh,
                contentDescription = "Sync Now"
            )
        }
    }) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text(
                "Product Categories",
                style = MaterialTheme.typography.headlineMedium,
                fontFamily = Outfit
            )
            viewModel.errorMessage?.let {
                Text("Error: $it", color = Color.Red)
            }
            LazyColumn {
                items(viewModel.categories) { category ->
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 4.dp),
                        border = BorderStroke(1.dp, Color.LightGray),
                        colors = CardDefaults.cardColors(containerColor = Color.White),
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text("Category ID: ${category.id}", fontWeight = FontWeight.Bold)
                            Text("Title: ${category.title}")
                            Text("Total products: ${category.totalProducts}")
                        }
                    }
                }
            }
        }
    }
}