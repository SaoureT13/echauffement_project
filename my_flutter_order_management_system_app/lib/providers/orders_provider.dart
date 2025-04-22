import 'package:flutter/foundation.dart';
import '../data/repository/data_repository.dart';
import '../data/models/order.dart';

class OrdersProvider with ChangeNotifier {
  final DataRepository repository = DataRepository();
  List<Order> _orders = [];
  String? _errorMessage;

  List<Order> get orders => _orders;
  String? get errorMessage => _errorMessage;

  Future<void> fetchOrders() async {
    try {
      _orders = await repository.getOrders();
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> deleteOrder(String id) async {
    try {
      await repository.deleteOrder(id);
      _orders.removeWhere((order) => order.id == id);
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }
}