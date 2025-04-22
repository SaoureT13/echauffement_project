import '../api/api_service.dart';
import '../models/order.dart';
import '../models/product.dart';

class DataRepository {
  final ApiService apiService = ApiService();

  Future<List<Order>> getOrders() async {
    try {
      final response = await apiService.getOrders();
      return response.data.orders;
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> deleteOrder(String id) async {
    try {
      await apiService.deleteOrder(id);
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<List<Customer>> getCustomers({String? name}) async {
    try {
      final response = await apiService.getCustomers(name: name);
      return response.data.customers;
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> deleteCustomer(String id) async {
    try {
      await apiService.deleteCustomer(id);
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<Customer> updateCustomer(String id, Map<String, dynamic> data) async {
    try {
      return await apiService.updateCustomer(id, data);
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<List<Product>> getProducts({String? name}) async {
    try {
      final response = await apiService.getProducts(name: name);
      return response.data.products;
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> deleteProduct(String id) async {
    try {
      await apiService.deleteProduct(id);
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<Product> updateProduct(String id, Map<String, dynamic> data) async {
    try {
      return await apiService.updateProduct(id, data);
    } catch (e) {
      throw Exception(e.toString());
    }
  }
}
