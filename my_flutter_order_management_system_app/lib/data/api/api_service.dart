import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/order.dart';
import '../models/customer.dart';
import '../models/product.dart';

class ApiService {
  static const String getUrl = 'http://localhost:3000';
  static const String deleteUrl = 'http://localhost:8000';

  Future<OrderResponse> getOrders() async {
    final response = await http.get(
      Uri.parse('$getUrl/api/orders?limit=99999'),
    );
    if (response.statusCode == 200) {
      return OrderResponse.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load orders. Error: ${response.body}');
    }
  }

  Future<void> deleteOrder(String id) async {
    final response = await http.delete(Uri.parse('$deleteUrl/api/orders/$id'));
    if (response.statusCode != 200) {
      throw Exception('Failed to delete order. Error: ${response.body}');
    }
  }

  Future<CustomerResponse> getCustomers({String? name}) async {
    final queryParams = {
      'limit': '99999',
      if (name != null && name.isNotEmpty) 'name': name,
    };
    final uri = Uri.parse(
      '$getUrl/api/customers',
    ).replace(queryParameters: queryParams);
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return CustomerResponse.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load customers: ${response.body}');
    }
  }

  Future<void> deleteCustomer(String id) async {
    final response = await http.delete(
      Uri.parse('$deleteUrl/api/customers/$id'),
    );
    if (response.statusCode != 200) {
      throw Exception('Failed to delete customer. Error: ${response.body}');
    }
  }

  Future<Customer> updateCustomer(String id, Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('$getUrl/api/customers/$id'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({...data, 'method': 'ajax'}),
    );
    if (response.statusCode == 200) {
      final updateResponse = CustomerUpdateResponse.fromJson(
        jsonDecode(response.body),
      );
      return updateResponse.data;
    } else {
      throw Exception('Failed to update customer: ${response.body}');
    }
  }

  Future<ProductResponse> getProducts({String? name}) async {
    final queryParams = {
      'limit': '99999',
      if (name != null && name.isNotEmpty) 'name': name,
    };
    final uri = Uri.parse(
      '$getUrl/api/products',
    ).replace(queryParameters: queryParams);
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return ProductResponse.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Failed to load products: ${response.body}');
    }
  }

  Future<void> deleteProduct(String id) async {
    final response = await http.delete(Uri.parse('$deleteUrl/api/product/$id'));
    if (response.statusCode != 200) {
      throw Exception('Failed to delete product. Error: ${response.body}');
    }
  }

  Future<Product> updateProduct(String id, Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse('$getUrl/api/products/$id'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({...data, 'method': 'ajax'}),
    );
    if (response.statusCode == 200) {
      final updateResponse = ProductUpdateResponse.fromJson(
        jsonDecode(response.body),
      );
      return updateResponse.data;
    } else {
      throw Exception('Failed to update product: ${response.body}');
    }
  }
}
