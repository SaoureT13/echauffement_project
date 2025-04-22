package com.example.order_management_system.navigation

import com.example.order_management_system.R

sealed class Screen(val route: String, val label: String, val iconResId: Int) {
    object Orders : Screen("orders", "Commandes", R.drawable.file_text)
    object Products : Screen("products", "Produits", R.drawable.store)
    object Customers : Screen("customers", "Clients", R.drawable.user_round)
}