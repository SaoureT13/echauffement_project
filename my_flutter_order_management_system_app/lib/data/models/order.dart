import 'package:my_flutter_order_management_system_app/data/models/product.dart';

class OrderResponse {
  final int code;
  final String description;
  final OrderData data;

  OrderResponse({
    required this.code,
    required this.description,
    required this.data,
  });

  factory OrderResponse.fromJson(Map<String, dynamic> json) {
    return OrderResponse(
      code: json['code'],
      description: json['description'],
      data: OrderData.fromJson(json['data']),
    );
  }
}

class OrderData {
  final List<Order> orders;
  final Page page;

  OrderData({required this.orders, required this.page});

  factory OrderData.fromJson(Map<String, dynamic> json) {
    return OrderData(
      orders: (json['orders'] as List).map((e) => Order.fromJson(e)).toList(),
      page: Page.fromJson(json['page']),
    );
  }
}

class Order {
  final String id;
  final String status;
  final String createdAt;
  final String updatedAt;
  final Customer customer;
  final List<OrderProduct> products;

  Order({
    required this.id,
    required this.status,
    required this.createdAt,
    required this.updatedAt,
    required this.customer,
    required this.products,
  });

  factory Order.fromJson(Map<String, dynamic> json) {
    return Order(
      id: json['id'],
      status: json['status'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
      customer: Customer.fromJson(json['customer']),
      products:
          (json['products'] as List)
              .map((e) => OrderProduct.fromJson(e))
              .toList(),
    );
  }
}

class Customer {
  final String id;
  final String name;
  final String phone;
  final String email;
  final String? address;
  final String? createdAt;
  final String? updatedAt;
  final String? ordersCount;

  Customer({
    required this.id,
    required this.name,
    required this.phone,
    required this.email,
    this.address,
    this.createdAt,
    this.updatedAt,
    this.ordersCount,
  });

  factory Customer.fromJson(Map<String, dynamic> json) {
    return Customer(
      id: json['id'],
      name: json['name'],
      phone: json['phone'],
      email: json['email'],
      address: json['address'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
      // ordersCount: json['orders_count'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'phone': phone,
      'email': email,
      'address': address,
      'created_at': createdAt,
      'updated_at': updatedAt,
      // 'orders_count': ordersCount,
    };
  }
}

class OrderProduct {
  final String orderDetailsId;
  final String id;
  final String name;
  final int quantity;
  final int unitPrice;
  final String? image;

  OrderProduct({
    required this.orderDetailsId,
    required this.id,
    required this.name,
    required this.quantity,
    required this.unitPrice,
    this.image,
  });

  factory OrderProduct.fromJson(Map<String, dynamic> json) {
    return OrderProduct(
      orderDetailsId: json['order_details_id'],
      id: json['id'],
      name: json['name'],
      quantity: json['quantity'],
      unitPrice: json['unit_price'],
      image: json['image'],
    );
  }
}
