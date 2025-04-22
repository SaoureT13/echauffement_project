import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';
import '../../data/models/order.dart';
import 'delete_confirmation_modal.dart';

class OrderCard extends StatelessWidget {
  final Order order;
  final VoidCallback onDelete;

  const OrderCard({super.key, required this.order, required this.onDelete});

  String formatDate(String dateString) {
    try {
      final date = DateTime.parse(dateString);
      return DateFormat('HH:mm, dd MMM yyyy').format(date);
    } catch (e) {
      return 'Invalid date';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12), side: BorderSide(width: 1)),
      elevation: 4,
      color: Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        order.customer.name,
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          fontFamily: "Outfit",
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      Text(
                        order.customer.phone,
                        style: const TextStyle(
                          fontSize: 12,
                          color: Colors.grey,
                        ),
                      ),
                      Text(
                        order.customer.email,
                        style: const TextStyle(
                          fontSize: 12,
                          color: Colors.grey,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 4,
                  ),
                  decoration: BoxDecoration(
                    color:
                        order.status == "pending"
                            ? const Color(0xFFFFF9C4)
                            : const Color(0xFFDCFCE7),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Text(
                    order.status[0].toUpperCase() + order.status.substring(1),
                    style: TextStyle(
                      color:
                          order.status == "pending"
                              ? Color(0xFFFFD154)
                              : Color(0xFF05DF72),
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SvgPicture.asset("assets/icons/clock.svg"),
                    const SizedBox(width: 4),
                    Text(
                      formatDate(order.createdAt),
                      style: const TextStyle(fontSize: 12, color: Colors.grey),
                    ),

                    IconButton(
                      icon: const Icon(Icons.delete, color: Colors.red),
                      onPressed: () async {
                        final confirm = await showConfirmDelete(
                          context,
                          'order',
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
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  '${order.products.length} items',
                  style: const TextStyle(fontSize: 12, color: Colors.grey),
                ),
                Row(
                  children: [
                    // TextButton(
                    //   onPressed: () {
                    //     // Navigate to order details (placeholder)
                    //   },
                    //   child: const Text(
                    //     'View Details',
                    //     style: TextStyle(fontSize: 12, color: Colors.blue),
                    //   ),
                    // ),
                    Text(
                      '\$${order.products.fold(0, (sum, p) => sum + p.unitPrice * p.quantity)}',
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF155DFC),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 4),
            ...order.products.map(
              (product) => Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Text(
                      '${product.quantity}x ${product.name}',
                      style: const TextStyle(fontSize: 14),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  Text(
                    '\$${product.unitPrice}',
                    style: const TextStyle(fontSize: 14),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
