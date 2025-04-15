from ninja import Schema, ModelSchema
from typing import Optional, List
from .models import *


class CustomerSchemaIn(ModelSchema):

    class Meta:
        model = Customer
        fields = ["str_cust_name", "str_cust_email", "str_cust_adress"]


class CustomerSchemaOut(ModelSchema):

    class Meta:
        model = Customer
        fields = "__all__"


class ProductSchemaIn(ModelSchema):
    class Meta:
        model = Product
        fields = "__all__"
        exclude = ["int_pro_pk"]


class ProductSchemaOut(ModelSchema):
    class Meta:
        model = Product
        fields = "__all__"


class OrderSchemaOut(ModelSchema):
    class Meta:
        model = Order
        fields = "__all__"


class ProductItem(Schema):
    int_pro_pk: int
    int_pro_qty: int


class OrderSchemaIn(ModelSchema):
    product_ids: List[ProductItem]
    int_customer_fk: int

    class Meta:
        model = Order
        fields = "__all__"
        exclude = ["int_order_pk"]


class OrderDetailsSchemaIn(ModelSchema):
    class Meta:
        model = OrderDetails
        fields = "__all__"
        exclude = ["id"]


class OrderDetailsSchemaOut(ModelSchema):
    class Meta:
        model = OrderDetails
        fields = "__all__"


class SuccessResponseSchema(Schema):
    code: int
    description: str
    data: Optional[CustomerSchemaOut | OrderSchemaOut] = None


class ErrorResponseSchema(Schema):
    code: int
    description: str
