from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    registration_date = models.DateTimeField()
    # created_at = models.DateTimeField(auto_now=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "customers"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    stock = models.IntegerField()
    # created_at = models.DateTimeField(auto_now=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "products"


class Order(models.Model):
    registration_date = models.DateTimeField()
    status = models.CharField(max_length=100, default="pending")
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name="orders", related_query_name="order")
    # created_at = models.DateTimeField(auto_now=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "orders"


class OrderDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    unit_price = models.FloatField()
    # created_at = models.DateTimeField(auto_now=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "order_details"
