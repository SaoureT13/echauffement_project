from django.db import models


class Customer(models.Model):
    int_pk_cust = models.AutoField(primary_key=True)
    str_cust_name = models.CharField(max_length=150)
    str_cust_email = models.EmailField()
    str_cust_adress = models.CharField(max_length=255)
    dt_cust_dt_regist = models.DateTimeField()
    dt_cust_created_at = models.DateTimeField(auto_now=True)
    dt_cust_updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "customers"


class Product(models.Model):
    int_pk_pro = models.AutoField(primary_key=True)
    str_pro_name = models.CharField(max_length=255)
    dbl_pro_price = models.FloatField()
    int_pro_stock = models.IntegerField()

    class Meta:
        db_table = "products"


class Order(models.Model):
    int_pk_order = models.AutoField(primary_key=True)
    dt_order_dt_regist = models.DateTimeField()
    str_order_status = models.CharField(max_length=100)
    int_customer_fk = models.ForeignKey(Customer, on_delete=models.CASCADE)

    class Meta:
        db_table = "orders"


class OrderDetails(models.Model):
    int_pro_fk = models.ForeignKey(Product, on_delete=models.CASCADE)
    int_order_fk = models.ForeignKey(Order, on_delete=models.CASCADE)
    int_pro_qty = models.IntegerField()
    dbl_inutary_price = models.FloatField()
    
    class Meta:
        db_table = "order_details"
