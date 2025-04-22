package com.example.order_management_system.components

import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarDefaults
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.navigation.NavController
import androidx.navigation.compose.currentBackStackEntryAsState
import com.example.order_management_system.navigation.Screen
import com.example.order_management_system.ui.theme.Outfit

@Composable
fun BottomNavigationBar(navController: NavController) {
    val items = listOf(Screen.Orders, Screen.Products, Screen.Customers)
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    NavigationBar {
        items.forEach { item ->
            NavigationBarItem(
                icon = { Icon(
                    painter = painterResource(id=item.iconResId),
                    contentDescription = item.label,
                    tint= if (currentRoute == item.route) Color(0xFF4361EE) else Color.Gray
                ) },
                label = { Text(item.label, color = if (currentRoute == item.route) Color(0xFF4361EE) else Color.Gray, fontFamily = Outfit, fontWeight = FontWeight.SemiBold) },
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