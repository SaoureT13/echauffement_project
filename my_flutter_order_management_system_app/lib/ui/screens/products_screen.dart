import 'dart:async';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../widgets/product_card.dart';
import '../../providers/products_provider.dart';

class ProductsScreen extends StatefulWidget {
  const ProductsScreen({super.key});

  @override
  State<ProductsScreen> createState() => _ProductsScreenState();
}

class _ProductsScreenState extends State<ProductsScreen> {
  Timer? _debounce;
  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    // Fetch products when the screen is first displayed
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<ProductsProvider>(context, listen: false).fetchProducts();
    });

    _searchController.addListener(_onSearchChanged);
  }

  void _onSearchChanged() {
    if (_debounce?.isActive ?? false) _debounce!.cancel();
    _debounce = Timer(const Duration(milliseconds: 500), () {
      Provider.of<ProductsProvider>(
        context,
        listen: false,
      ).searchProducts(_searchController.text.trim());
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
    final productsProvider = Provider.of<ProductsProvider>(context);

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Products',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 8),
              TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  hintText: 'Search products by name...',
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
                              productsProvider.searchProducts('');
                            },
                          )
                          : null,
                ),
              ),
              if (productsProvider.errorMessage != null)
                Text(
                  'Error: ${productsProvider.errorMessage}',
                  style: const TextStyle(color: Colors.red),
                ),
              const SizedBox(height: 8),
              Expanded(
                child: ListView.builder(
                  itemCount: productsProvider.products.length,
                  itemBuilder: (context, index) {
                    final product = productsProvider.products[index];
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: ProductCard(
                        product: product,
                        quantity: productsProvider.quantities[product.id] ?? 0,
                        isFavorite:
                            productsProvider.favorites[product.id] ?? false,
                        onQuantityChanged:
                            (newQuantity) => productsProvider.updateQuantity(
                              product.id,
                              newQuantity,
                            ),
                        onToggleFavorite:
                            () => productsProvider.toggleFavorite(product.id),
                        onDelete:
                            () => productsProvider.deleteProduct(product.id),
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
        onPressed: () => productsProvider.fetchProducts(),
        child: const Icon(Icons.refresh),
      ),
    );
  }
}
