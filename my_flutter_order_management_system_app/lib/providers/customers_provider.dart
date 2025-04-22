import 'package:flutter/foundation.dart';
import 'package:my_flutter_order_management_system_app/data/models/order.dart';
import '../data/repository/data_repository.dart';

class CustomersProvider with ChangeNotifier {
  final DataRepository repository = DataRepository();
  List<Customer> _customers = [];
  String? _errorMessage;
  String _searchTerm = '';

  List<Customer> get customers => _customers;
  String? get errorMessage => _errorMessage;
  String get searchTerm => _searchTerm;

  Future<void> fetchCustomers() async {
    try {
      _customers = await repository.getCustomers();
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> searchCustomers(String name) async {
    _searchTerm = name;
    try {
      _customers = await repository.getCustomers(name: name);
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> deleteCustomer(String id) async {
    try {
      await repository.deleteCustomer(id);
      _customers.removeWhere((customer) => customer.id == id);
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> updateCustomer(String id, Map<String, dynamic> data) async {
    try {
      final updatedCustomer = await repository.updateCustomer(id, data);
      final index = _customers.indexWhere((c) => c.id == id);
      if (index != -1) {
        _customers[index] = updatedCustomer;
      }
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }
}
