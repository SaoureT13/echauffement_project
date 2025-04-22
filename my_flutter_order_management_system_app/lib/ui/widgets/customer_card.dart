import 'package:flutter/material.dart';
import 'package:my_flutter_order_management_system_app/data/models/order.dart';
import 'package:my_flutter_order_management_system_app/ui/screens/edit_customer_screen.dart';
import 'delete_confirmation_modal.dart';

class CustomerCard extends StatelessWidget {
  final Customer customer;
  final VoidCallback onDelete;

  const CustomerCard({
    super.key,
    required this.customer,
    required this.onDelete,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
        side: BorderSide(width: 1),
      ),
      color: Colors.white,
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Customer ID: ${customer.id}',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text('Name: ${customer.name}'),
                  Text('Email: ${customer.email}'),
                  Text('Phone: ${customer.phone}'),
                  if (customer.address != null)
                    Text('Address: ${customer.address}'),
                ],
              ),
            ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.edit, color: Colors.blue),
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder:
                            (context) => EditCustomerScreen(customer: customer),
                      ),
                    );
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.delete, color: Colors.red),
                  onPressed: () async {
                    final confirm = await showConfirmDelete(
                      context,
                      'customer',
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
      ),
    );
  }
}
