import 'package:my_flutter_order_management_system_app/data/models/order.dart';
import 'package:my_flutter_order_management_system_app/data/models/product.dart';

class CustomerResponse {
  final int code;
  final String description;
  final CustomerData data;

  CustomerResponse({required this.code, required this.description, required this.data});

  factory CustomerResponse.fromJson(Map<String, dynamic> json) {
    return CustomerResponse(
      code: json['code'],
      description: json['description'],
      data: CustomerData.fromJson(json['data']),
    );
  }
}

class CustomerUpdateResponse {
  final int code;
  final String description;
  final Customer data;

  CustomerUpdateResponse({required this.code, required this.description, required this.data});

  factory CustomerUpdateResponse.fromJson(Map<String, dynamic> json) {
    return CustomerUpdateResponse(
      code: json['code'],
      description: json['description'],
      data: Customer.fromJson(json['data']),
    );
  }
}

class CustomerData {
  final List<Customer> customers;
  final Page page;

  CustomerData({required this.customers, required this.page});

  factory CustomerData.fromJson(Map<String, dynamic> json) {
    return CustomerData(
      customers: (json['customers'] as List).map((e) => Customer.fromJson(e)).toList(),
      page: Page.fromJson(json['page']),
    );
  }
}

