package com.example.myapp.ui.screens.orders

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.myapp.data.model.Order
import com.example.myapp.ui.theme.Outfit
import com.example.myapp.viewmodel.orders.OrdersViewModel
import java.text.SimpleDateFormat
import java.util.*

import com.example.myapp.R

@Composable
fun OrdersScreen(viewModel: OrdersViewModel = viewModel()) {
    LaunchedEffect(Unit) {
        viewModel.fetchOrders()
    }

    Scaffold(floatingActionButton = {
        FloatingActionButton(
            onClick = { viewModel.fetchOrders() },
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
            Text("Orders", style = MaterialTheme.typography.headlineMedium, fontFamily = Outfit)
            viewModel.errorMessage?.let {
                Text("Error: $it", color = Color.Red)
            }
            Spacer(modifier = Modifier.height(8.dp))
            LazyColumn {
                items(viewModel.orders) { order ->
                    OrderItem(order = order)
                    Spacer(modifier = Modifier.height(8.dp))
                }
            }
        }
    }
}

@Composable
fun OrderItem(order: Order) {
    Card(
        modifier = Modifier
            .fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White),
        border = BorderStroke(1.dp, Color.LightGray)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = order.customer.name,
                        style = MaterialTheme.typography.bodyLarge,
                        fontWeight = FontWeight.Bold,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        fontFamily = Outfit,
                    )
                    Text(
                        text = order.customer.phone!!,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.Gray,
                        fontFamily = Outfit,
                    )
                    Text(
                        text = order.customer.email,
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.Gray,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        fontFamily = Outfit,
                    )
                }
                // Status Badge
                Text(
                    text = order.status.replaceFirstChar { it.uppercase() },
                    modifier = Modifier
                        .background(
                            if (order.status == "pending") Color(0xFFFFF9C4) else Color(
                                0xFFdcfce7
                            ), RoundedCornerShape(4.dp)
                        )
                        .padding(horizontal = 8.dp, vertical = 4.dp),
                    color = if (order.status == "pending") Color(0xFFFFB900) else Color(0xff05DF72), // Pinkish color for status
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = Outfit,
                )
            }

            Spacer(modifier = Modifier.height(8.dp))

            // Date and Total Row
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        painterResource(R.drawable.clock),
                        contentDescription = "Order date",
                        tint = Color.Gray
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = formatDate(order.createdAt),
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.Gray,
                        fontFamily = Outfit,
                    )
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = "${order.products.size} items",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color.Gray,
                    fontFamily = Outfit,
                )
//                TextButton(onClick = { /* Navigate to order details */ }) {
//                    Text(
//                        text = "View Details",
//                        color = MaterialTheme.colorScheme.primary,
//                        fontSize = 12.sp,
//
//                    )
//                }
                Text(
                    text = "$${order.products.sumOf { it.unitPrice * it.quantity }}",
                    style = MaterialTheme.typography.bodyMedium,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF155DFC),
                    fontFamily = Outfit,
                )
            }

            Spacer(modifier = Modifier.height(4.dp))

            order.products.forEach { product ->
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text(
                        text = "${product.quantity}x ${product.name}",
                        style = MaterialTheme.typography.bodyMedium,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.weight(1f),
                        fontFamily = Outfit,
                    )
                    Text(
                        text = "$${product.unitPrice}",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.Black,
                        fontFamily = Outfit,
                    )
                }
            }
        }
    }
}

@Composable
fun formatDate(dateString: String): String {
    return try {
        val inputFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.getDefault())
        inputFormat.timeZone = TimeZone.getTimeZone("UTC")
        val date = inputFormat.parse(dateString)
        val outputFormat = SimpleDateFormat("HH:mm, dd MMM yyyy", Locale.getDefault())
        outputFormat.format(date ?: Date())
    } catch (e: Exception) {
        "Invalid date"
    }
}