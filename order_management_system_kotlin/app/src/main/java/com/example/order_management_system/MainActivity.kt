package com.example.order_management_system

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import java.net.URL
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.ShoppingCart

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApp()
        }
    }
}

// Data classes pour les modèles
@Serializable
data class Order(val id: Int, val customerName: String, val total: Double)
@Serializable
data class Product(val id: Int, val name: String, val price: Double)
@Serializable
data class Customer(val id: Int, val name: String, val email: String)

// Routes de navigation
sealed class Screen(val route: String, val label: String, val icon: androidx.compose.ui.graphics.vector.ImageVector) {
    object Orders : Screen("orders", "Commandes", Icons.Default.Home)
    object Products : Screen("products", "Produits", Icons.Default.ShoppingCart)
    object Customers : Screen("customers", "Clients", Icons.Default.Person)
}

@Composable
fun MyApp() {
    val navController = rememberNavController()
    MaterialTheme {
        Scaffold(
            bottomBar = { BottomNavigationBar(navController) }
        ) { innerPadding ->
            NavHost(
                navController = navController,
                startDestination = Screen.Orders.route,
                modifier = Modifier.padding(innerPadding)
            ) {
                composable(Screen.Orders.route) { OrdersScreen() }
                composable(Screen.Products.route) { ProductsScreen() }
                composable(Screen.Customers.route) { CustomersScreen() }
            }
        }
    }
}

@Composable
fun BottomNavigationBar(navController: NavController) {
    val items = listOf(Screen.Orders, Screen.Products, Screen.Customers)
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    NavigationBar {
        items.forEach { item ->
            NavigationBarItem(
                icon = { Icon(item.icon, contentDescription = item.label) },
                label = { Text(item.label) },
                selected = currentRoute == item.route,
                onClick = {
                    navController.navigate(item.route) {
                        popUpTo(navController.graph.startDestinationId)
                        launchSingleTop = true
                    }
                }
            )
        }
    }
}


@Composable
fun OrdersScreen() {
    val orders = remember { mutableStateOf<List<Order>>(emptyList()) }
    val scope = rememberCoroutineScope()
    var isLoading by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        isLoading = true
        orders.value = fetchOrders()
        isLoading = false
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Button(
            onClick = {
                scope.launch {
                    isLoading = true
                    orders.value = fetchOrders()
                    isLoading = false
                }
            },
            modifier = Modifier.align(Alignment.End),
            enabled = !isLoading
        ) {
            Text("Sync Now")
        }
        Spacer(modifier = Modifier.height(8.dp))
        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.CenterHorizontally))
        } else {
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(orders.value) { order ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text("Commande #${order.id}", style = MaterialTheme.typography.titleMedium)
                            Text("Client: ${order.customerName}")
                            Text("Total: ${order.total}€")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun ProductsScreen() {
    val products = remember { mutableStateOf<List<Product>>(emptyList()) }
    val scope = rememberCoroutineScope()
    var isLoading by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        isLoading = true
        products.value = fetchProducts()
        isLoading = false
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Button(
            onClick = {
                scope.launch {
                    isLoading = true
                    products.value = fetchProducts()
                    isLoading = false
                }
            },
            modifier = Modifier.align(Alignment.End),
            enabled = !isLoading
        ) {
            Text("Sync Now")
        }
        Spacer(modifier = Modifier.height(8.dp))
        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.CenterHorizontally))
        } else {
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(products.value) { product ->
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(product.name, style = MaterialTheme.typography.titleMedium)
                            Text("Prix: ${product.price}€")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun CustomersScreen() {
    val customers = remember { mutableStateOf<List<Customer>>(emptyList()) }
    val scope = rememberCoroutineScope()
    var isLoading by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        isLoading = true
        customers.value = fetchCustomers()
        isLoading = false
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Button(
            onClick = {
                scope.launch {
                    isLoading = true
                    customers.value = fetchCustomers()
                    isLoading = false
                }
            },
            modifier = Modifier.align(Alignment.End),
            enabled = !isLoading
        ) {
            Text("Sync Now")
        }
        Spacer(modifier = Modifier.height(8.dp))
        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.CenterHorizontally))
        } else {
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(customers.value) { customer ->
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

// Fonctions pour fetch les données
suspend fun fetchOrders(): List<Order> = withContext(Dispatchers.IO) {
    try {
        val jsonString = URL("https://api.example.com/orders").readText()
        Json.decodeFromString<List<Order>>(jsonString)
    } catch (_: Exception) {
        emptyList()
    }
}

suspend fun fetchProducts(): List<Product> = withContext(Dispatchers.IO) {
    try {
        val jsonString = URL("https://api.example.com/products").readText()
        Json.decodeFromString<List<Product>>(jsonString)
    } catch (_: Exception) {
        emptyList()
    }
}

suspend fun fetchCustomers(): List<Customer> = withContext(Dispatchers.IO) {
    try {
        val jsonString = URL("https://api.example.com/customers").readText()
        Json.decodeFromString<List<Customer>>(jsonString)
    } catch (_: Exception) {
        emptyList()
    }
}