from ninja import Schema, ModelSchema
from typing import Optional, List
from .models import *


class CustomerSchemaIn(ModelSchema):

    class Meta:
        model = Customer
        fields = ["name", "email", "address"]


class CustomerSchemaOut(ModelSchema):
    count_orders: Optional[int] = None

    class Meta:
        model = Customer
        fields = "__all__"


class ProductSchemaIn(ModelSchema):
    class Meta:
        model = Product
        fields = "__all__"
        exclude = ["id", "created_at", "updated_at"]


class ProductSchemaOut(ModelSchema):
    class Meta:
        model = Product
        fields = "__all__"


class OrderSchemaOut(ModelSchema):
    class Meta:
        model = Order
        fields = "__all__"


class ProductItem(Schema):
    id: int
    quantity: int


class OrderSchemaIn(ModelSchema):
    product_items: List[ProductItem]
    customer_id: int

    class Meta:
        model = Order
        fields = "__all__"
        fields_optional = ["status"]
        exclude = ["id", "registration_date", "created_at", "updated_at"]


class OrderDetailsSchemaIn(ModelSchema):
    class Meta:
        model = OrderDetails
        fields = "__all__"
        exclude = ["id"]


class OrderDetailsSchemaOut(ModelSchema):
    class Meta:
        model = OrderDetails
        fields = "__all__"


class MissingProductsSchema(Schema):
    missing_products: List[int] = None


class SuccessResponseSchema(Schema):
    code: int
    description: str
    data: Optional[
        CustomerSchemaOut
        | OrderSchemaOut
        | List[int]
        | List[CustomerSchemaOut]
        | List[ProductSchemaOut]
    ] = None
    missing_products: Optional[List[int]] = None


class ErrorResponseSchema(Schema):
    code: int
    description: str
