package com.example.order_management_system.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.order_management_system.services.ApiService
import com.example.order_management_system.repository.CustomersRepository
import com.example.order_management_system.repository.OrdersRepository
import com.example.order_management_system.repository.OrdersRepositoryImpl
import com.example.order_management_system.repository.ProductsRepository
import com.example.order_management_system.screens.CustomersScreen
import com.example.order_management_system.screens.OrdersScreen
import com.example.order_management_system.screens.ProductsScreen
import com.example.order_management_system.viewmodel.CustomersViewModel
import com.example.order_management_system.viewmodel.OrdersViewModel
import com.example.order_management_system.viewmodel.ProductsViewModel

@Composable
fun NavGraph(navController: NavHostController, paddingValues: androidx.compose.foundation.layout.PaddingValues) {
    val apiService = ApiService.create()
    val ordersRepository = OrdersRepositoryImpl(apiService)
    val productsRepository = ProductsRepository(apiService)
    val customersRepository = CustomersRepository(apiService)
    val ordersViewModel = OrdersViewModel(ordersRepository)
    val productsViewModel = ProductsViewModel(productsRepository)
    val customersViewModel = CustomersViewModel(customersRepository)

    NavHost(
        navController = navController,
        startDestination = Screen.Orders.route,
        modifier = Modifier.padding(paddingValues)
    ) {
        composable(Screen.Orders.route) { OrdersScreen(ordersViewModel) }
        composable(Screen.Products.route) { ProductsScreen(productsViewModel) }
        composable(Screen.Customers.route) { CustomersScreen(customersViewModel) }
    }
}