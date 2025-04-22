import 'dart:async';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../widgets/customer_card.dart';
import '../../providers/customers_provider.dart';

class CustomersScreen extends StatefulWidget {
  const CustomersScreen({super.key});

  @override
  State<CustomersScreen> createState() => _CustomersScreenState();
}

class _CustomersScreenState extends State<CustomersScreen> {
  Timer? _debounce;
  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    // Fetch customers when the screen is first displayed
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<CustomersProvider>(context, listen: false).fetchCustomers();
    });

    _searchController.addListener(_onSearchChanged);
  }

  void _onSearchChanged() {
    // Utilisation de debounce pour espacer les requêtes à l'api de 500mls
    // Si un debounce est déjà en cours, le nouveau est annulé
    if (_debounce?.isActive ?? false) _debounce!.cancel();
    _debounce = Timer(const Duration(milliseconds: 500), () {
      Provider.of<CustomersProvider>(
        context,
        listen: false,
      ).searchCustomers(_searchController.text.trim());
    });
  }

  @override
  void dispose() {
    _debounce?.cancel();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final customersProvider = Provider.of<CustomersProvider>(context);

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Customers',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  hintText: 'Search customers by name...',
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                  suffixIcon:
                      _searchController.text.isNotEmpty
                          ? IconButton(
                            icon: const Icon(Icons.clear),
                            onPressed: () {
                              _searchController.clear();
                              customersProvider.searchCustomers('');
                            },
                          )
                          : null,
                ),
              ),
              if (customersProvider.errorMessage != null)
                Text(
                  'Error: ${customersProvider.errorMessage}',
                  style: const TextStyle(color: Colors.red),
                ),
              const SizedBox(height: 8),
              Expanded(
                child: ListView.builder(
                  itemCount: customersProvider.customers.length,
                  itemBuilder: (context, index) {
                    final customer = customersProvider.customers[index];
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: CustomerCard(
                        customer: customer,
                        onDelete:
                            () => customersProvider.deleteCustomer(customer.id),
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
        onPressed: () => customersProvider.fetchCustomers(),
        child: const Icon(Icons.refresh),
      ),
    );
  }
}
