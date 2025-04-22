package com.example.myapp.navigation

import com.example.myapp.R

sealed class Screens(val route: String, val label: String, val iconResId: Int) {
    object Orders : Screens("orders", "Orders", R.drawable.file_text)
    object Products : Screens("products", "Products", R.drawable.store)
    object Customers : Screens("customers", "Customers", R.drawable.user_round)
    object Categories : Screens("categories", "Categories", R.drawable.library_big)
}