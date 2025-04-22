package com.example.myapp.ui.screens.products

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.myapp.data.model.Product
import com.example.myapp.ui.components.NotificationBadge
import com.example.myapp.ui.theme.Outfit
import com.example.myapp.viewmodel.products.ProductsViewModel

@Composable
fun ProductsScreen(viewModel: ProductsViewModel = viewModel()) {
    LaunchedEffect(Unit) {
        viewModel.fetchProducts()
    }

    Scaffold(floatingActionButton = {
        FloatingActionButton(
            onClick = { viewModel.fetchProducts() },
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
            Text("Products", style = MaterialTheme.typography.headlineMedium, fontFamily = Outfit)
            viewModel.errorMessage?.let {
                Text("Error: $it", color = Color.Red)
            }
            Spacer(modifier = Modifier.height(8.dp))
            LazyColumn {
                items(viewModel.products) { product ->
                    ProductItem(product = product)
                    Spacer(modifier = Modifier.height(8.dp))
                }
            }
        }
    }
}

@Composable
fun ProductItem(product: Product) {

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, Color.LightGray, RoundedCornerShape(8.dp)),
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White),
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(48.dp)
                    .clip(RoundedCornerShape(4.dp))
                    .background(Color.Gray),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = product.name.first().toString(),
                    color = Color.White,
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold
                )
            }

            Spacer(modifier = Modifier.width(12.dp))

            Column(
                modifier = Modifier
                    .weight(1f)
                    .padding(end = 8.dp)
            ) {
                Text(
                    text = product.name,
                    style = MaterialTheme.typography.bodyLarge,
                    textDecoration = TextDecoration.Underline,
                    fontWeight = FontWeight.Medium,
                    fontFamily = Outfit
                )
                Text(
                    text = "Price: $${product.price}",
                    style = MaterialTheme.typography.bodyMedium,
                    color = Color.Black,
                    fontFamily = Outfit
                )
                Row {
                    Text(
                        text = "Stock:",
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.Gray,
                        fontFamily = Outfit,
                    )
                    Text(
                        text = "${product.stock}",
                        style = MaterialTheme.typography.bodySmall,
                        color = if (product.stock > 9) Color.Gray else Color.Red,
                        fontFamily = Outfit,
                        fontWeight = if (product.stock > 9) null else FontWeight.Bold
                    )
                }
                Row {
                    Text(
                        text = "Category: ",
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.Gray,
                        fontFamily = Outfit
                    )
                    Text(
                        text = product.category.title,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color(0xFF155DFC),
                        fontFamily = Outfit,
                    )
                }
            }
        }
    }
}