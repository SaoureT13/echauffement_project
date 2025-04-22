class ProductResponse {
  final int code;
  final String description;
  final ProductData data;

  ProductResponse({
    required this.code,
    required this.description,
    required this.data,
  });

  factory ProductResponse.fromJson(Map<String, dynamic> json) {
    return ProductResponse(
      code: json['code'],
      description: json['description'],
      data: ProductData.fromJson(json['data']),
    );
  }
}

class ProductUpdateResponse {
  final int code;
  final String description;
  final Product data;

  ProductUpdateResponse({
    required this.code,
    required this.description,
    required this.data,
  });

  factory ProductUpdateResponse.fromJson(Map<String, dynamic> json) {
    return ProductUpdateResponse(
      code: json['code'],
      description: json['description'],
      data: Product.fromJson(json['data']),
    );
  }
}

class ProductData {
  final List<Product> products;
  final Page page;

  ProductData({required this.products, required this.page});

  factory ProductData.fromJson(Map<String, dynamic> json) {
    return ProductData(
      products:
          (json['products'] as List).map((e) => Product.fromJson(e)).toList(),
      page: Page.fromJson(json['page']),
    );
  }
}

class Product {
  final String id;
  final String name;
  final dynamic price;
  final int stock;
  final String createdAt;
  final String updatedAt;
  final String? image;
  final Category category;

  Product({
    required this.id,
    required this.name,
    required this.price,
    required this.stock,
    required this.createdAt,
    required this.updatedAt,
    this.image,
    required this.category,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      name: json['name'],
      price: json['price'],
      stock: json['stock'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
      image: json['image'],
      category: Category.fromJson(json['category']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'price': price,
      'stock': stock,
      'created_at': createdAt,
      'updated_at': updatedAt,
      'image': image,
      'category': category.toJson(),
    };
  }
}

class Category {
  final String id;
  final String title;
  final String createdAt;
  final String updatedAt;

  Category({
    required this.id,
    required this.title,
    required this.createdAt,
    required this.updatedAt,
  });

  factory Category.fromJson(Map<String, dynamic> json) {
    return Category(
      id: json['id'],
      title: json['title'],
      createdAt: json['created_at'],
      updatedAt: json['updated_at'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'created_at': createdAt,
      'updated_at': updatedAt,
    };
  }
}

class Page {
  final int currentPage;
  final int limit;
  final int total;
  final int totalPages;

  Page({
    required this.currentPage,
    required this.limit,
    required this.total,
    required this.totalPages,
  });

  factory Page.fromJson(Map<String, dynamic> json) {
    return Page(
      currentPage: json['currentPage'],
      limit: json['limit'],
      total: json['total'],
      totalPages: json['totalPages'],
    );
  }
}
