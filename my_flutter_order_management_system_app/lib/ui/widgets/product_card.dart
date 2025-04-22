import 'package:flutter/material.dart';
import 'package:my_flutter_order_management_system_app/data/models/product.dart';
import 'package:my_flutter_order_management_system_app/ui/screens/edit_product_screen.dart';
import 'delete_confirmation_modal.dart';

class ProductCard extends StatelessWidget {
  final Product product;
  final int quantity;
  final bool isFavorite;
  final Function(int) onQuantityChanged;
  final VoidCallback onToggleFavorite;
  final VoidCallback onDelete;

  const ProductCard({
    super.key,
    required this.product,
    required this.quantity,
    required this.isFavorite,
    required this.onQuantityChanged,
    required this.onToggleFavorite,
    required this.onDelete,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
        side: BorderSide(width: 1),
      ),
      elevation: 4,
      color: Colors.white,

      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                color: Colors.grey,
                borderRadius: BorderRadius.circular(4),
              ),
              child: Center(
                child: Text(
                  product.name.isNotEmpty ? product.name[0] : 'N/A',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 12),

            // Product Details
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    product.name,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Price: \$${product.price.toStringAsFixed(1)}',
                    style: const TextStyle(fontSize: 14),
                  ),
                  Text(
                    'Stock: ${product.stock}',
                    style: const TextStyle(fontSize: 14),
                  ),
                  Row(
                    children: [
                      const Text('Category: ', style: TextStyle(fontSize: 14)),
                      Text(
                        product.category.title,
                        style: const TextStyle(
                          fontSize: 14,
                          color: Colors.blue,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),

            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    IconButton(
                      icon: const Icon(
                        Icons.edit,
                        color: Colors.blue,
                        size: 20,
                      ),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder:
                                (context) =>
                                    EditProductScreen(product: product),
                          ),
                        );
                      },
                    ),
                    IconButton(
                      icon: const Icon(
                        Icons.delete,
                        color: Colors.red,
                        size: 20,
                      ),
                      onPressed: () async {
                        final confirm = await showConfirmDelete(
                          context,
                          'product',
                        );
                        if (confirm) {
                          onDelete();
                        }
                      },
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
