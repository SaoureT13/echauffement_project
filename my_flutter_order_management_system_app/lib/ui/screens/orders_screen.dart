import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../widgets/order_card.dart';
import '../../providers/orders_provider.dart';

class OrdersScreen extends StatefulWidget {
  const OrdersScreen({super.key});

  @override
  State<OrdersScreen> createState() => _OrdersScreenState();
}

class _OrdersScreenState extends State<OrdersScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<OrdersProvider>(context, listen: false).fetchOrders();
    });
  }

  @override
  Widget build(BuildContext context) {
    final ordersProvider = Provider.of<OrdersProvider>(context);

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Orders', style: Theme.of(context).textTheme.headlineSmall),
              if (ordersProvider.errorMessage != null)
                Text(
                  'Error: ${ordersProvider.errorMessage}',
                  style: const TextStyle(color: Colors.red),
                ),
              const SizedBox(height: 8),
              Expanded(
                child: ListView.builder(
                  itemCount: ordersProvider.orders.length,
                  itemBuilder: (context, index) {
                    final order = ordersProvider.orders[index];
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: OrderCard(
                        order: order,
                        onDelete: () => ordersProvider.deleteOrder(order.id),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => ordersProvider.fetchOrders(),
        child: const Icon(Icons.refresh),
      ),
    );
  }
}
