import 'package:flutter/material.dart';

Future<bool> showConfirmDelete(
  BuildContext context,
  String itemType,
) {
  return showDialog<bool>(
    context: context,
    builder:
        (context) => AlertDialog(
          title: Text('Delete $itemType'),
          content: Text('Are you sure you want to delete this $itemType?'),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () => Navigator.of(context).pop(true),
              child: const Text('Delete', style: TextStyle(color: Colors.red)),
            ),
          ],
        ),
  ).then((value) => value ?? false);
}
