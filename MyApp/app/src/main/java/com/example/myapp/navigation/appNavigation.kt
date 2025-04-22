package com.example.myapp.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.myapp.ui.screens.categories.CategoriesScreen
import com.example.myapp.ui.screens.customers.CustomersScreen
import com.example.myapp.ui.screens.orders.OrdersScreen
import com.example.myapp.ui.screens.products.ProductsScreen
import com.example.myapp.ui.theme.Outfit

@Composable
fun BottomNavigationBar(navController: NavHostController) {
    val items = listOf(Screens.Orders, Screens.Customers, Screens.Products, Screens.Categories)
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    NavigationBar {
        items.forEach { item ->
            NavigationBarItem(
                icon = {
                    Icon(
                        painter = painterResource(id = item.iconResId),
                        contentDescription = item.label,
                        tint = if (currentRoute == item.route) Color(0xFF4361EE) else Color.Gray
                    )
                },
                label = {
                    Text(
                        item.label,
                        color = if (currentRoute == item.route) Color(0xFF4361EE) else Color.Gray,
                        fontFamily = Outfit,
                        fontWeight = FontWeight.SemiBold
                    )
                },
                selected = currentRoute == item.route,
                onClick = {
                    navController.navigate(item.route) {
                        popUpTo(navController.graph.startDestinationId)
                        launchSingleTop = true
                    }
                },
                colors = NavigationBarItemDefaults.colors(
                    indicatorColor = Color.Transparent,
                    selectedIconColor = Color(0xFF4361EE),
                    unselectedIconColor = Color.Gray
                )
            )
        }
    }
}

@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    Scaffold(
        bottomBar = { BottomNavigationBar(navController) }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = "orders",
            modifier = Modifier.padding(innerPadding)
        ) {
            composable("orders") { OrdersScreen() }
            composable("products") { ProductsScreen() }
            composable("customers") { CustomersScreen() }
            composable("categories") { CategoriesScreen() }

        }
    }
}