from django.db import models


def product_directory_path(instance, filename):
    return "product_{0}/{1}".format(instance.product.id, filename)


class Customer(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "customers"


class Category(models.Model):
    title = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "categories"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    stock = models.IntegerField()
    image = models.ImageField(upload_to=product_directory_path, null=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        null=False,
        related_name="products",
        related_query_name="product",
    )
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "products"


class Order(models.Model):
    status = models.CharField(max_length=100, default="pending")
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name="orders",
        related_query_name="order",
    )
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "orders"


class OrderDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    unit_price = models.FloatField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "order_details"
