import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'navigation/app_navigation.dart';
import 'providers/orders_provider.dart';
import 'providers/customers_provider.dart';
import 'providers/products_provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => OrdersProvider()),
        ChangeNotifierProvider(create: (_) => CustomersProvider()),
        ChangeNotifierProvider(create: (_) => ProductsProvider()),
      ],
      child: MaterialApp(
        title: 'My App',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          useMaterial3: true,
          fontFamily: "Outfit",
        ),
        home: const AppNavigation(),
      ),
    );
  }
}
