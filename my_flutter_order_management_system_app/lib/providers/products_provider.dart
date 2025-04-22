import 'package:flutter/foundation.dart';
import '../data/repository/data_repository.dart';
import '../data/models/product.dart';

class ProductsProvider with ChangeNotifier {
  final DataRepository repository = DataRepository();
  List<Product> _products = [];
  String? _errorMessage;
  Map<String, int> _quantities = {};
  Map<String, bool> _favorites = {};
  String _searchTerm = '';

  List<Product> get products => _products;
  String? get errorMessage => _errorMessage;
  Map<String, int> get quantities => _quantities;
  Map<String, bool> get favorites => _favorites;

  String get searchTerm => _searchTerm;

  Future<void> fetchProducts() async {
    try {
      _products = await repository.getProducts();
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> searchProducts(String name) async {
    _searchTerm = name;
    try {
      _products = await repository.getProducts(name: name);
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> deleteProduct(String id) async {
    try {
      await repository.deleteProduct(id);
      _products.removeWhere((product) => product.id == id);
      _quantities.remove(id);
      _favorites.remove(id);
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  Future<void> updateProduct(String id, Map<String, dynamic> data) async {
    try {
      final updatedProduct = await repository.updateProduct(id, data);
      final index = _products.indexWhere((p) => p.id == id);
      if (index != -1) {
        _products[index] = updatedProduct;
      }
      _errorMessage = null;
      notifyListeners();
    } catch (e) {
      _errorMessage = e.toString();
      notifyListeners();
    }
  }

  void updateQuantity(String productId, int quantity) {
    _quantities[productId] = quantity;
    notifyListeners();
  }

  void toggleFavorite(String productId) {
    _favorites[productId] = !(_favorites[productId] ?? false);
    notifyListeners();
  }
}
