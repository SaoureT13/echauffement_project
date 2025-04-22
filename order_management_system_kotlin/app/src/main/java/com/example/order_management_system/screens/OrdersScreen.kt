package com.example.order_management_system.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.order_management_system.repository.OrdersRepositoryImpl
import com.example.order_management_system.services.RetroFitInstance
import com.example.order_management_system.viewmodel.OrdersViewModel

@Composable
fun OrdersScreen(viewModel: OrdersViewModel = viewModel()) {

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Button(
            onClick = { viewModel.fetchOrders() },
            modifier = Modifier.align(Alignment.End),
            enabled = true
        ) {
            Text("Sync Now")
        }
        Spacer(modifier = Modifier.height(8.dp))
        if (viewModel.isLoading.value) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.CenterHorizontally))
        } else {
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(viewModel.orders.value) { order ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                "Commande #${order.id}",
                                style = MaterialTheme.typography.titleMedium
                            )
//                            Text("Client: ${order.customerName}")
//                            Text("Total: ${order.total}€")
                        }
                    }
                }
                // Bouton pour charger plus de données (pagination)
                viewModel.pageInfo.value?.let { pageInfo ->
                    if (pageInfo.currentPage < pageInfo.totalPages) {
                        item {
                            Button(
                                onClick = {
                                    // TODO: Implémenter le chargement de la page suivante
                                    // viewModel.fetchOrders(page = pageInfo.currentPage + 1)
                                },
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(16.dp)
                            ) {
                                Text("Charger plus")
                            }
                        }
                    }
                }
            }
        }
    }
}