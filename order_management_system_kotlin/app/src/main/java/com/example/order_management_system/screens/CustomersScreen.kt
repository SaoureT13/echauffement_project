package com.example.order_management_system.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.order_management_system.viewmodel.CustomersViewModel

@Composable
fun CustomersScreen(viewModel: CustomersViewModel = viewModel()) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Button(
            onClick = { viewModel.fetchCustomers() },
            modifier = Modifier.align(Alignment.End),
            enabled = !viewModel.isLoading.value
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
                items(viewModel.customers.value) { customer ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(customer.name, style = MaterialTheme.typography.titleMedium)
                            Text("Email: ${customer.email}")
                        }
                    }
                }
            }
        }
    }
}