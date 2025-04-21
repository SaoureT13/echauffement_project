from ninja import Schema, ModelSchema
from typing import Optional, List
from .models import *
from pydantic import field_validator


class CustomerSchemaIn(ModelSchema):
    method: str | None = None
    selectedProduct: List[str] | None = None

    class Meta:
        model = Customer
        fields = ["name", "email", "address", "phone"]


class CustomerSchemaOut(ModelSchema):
    count_orders: Optional[int] = None

    class Meta:
        model = Customer
        fields = "__all__"


class ProductSchemaIn(ModelSchema):
    # category: str

    class Meta:
        model = Product
        fields = "__all__"
        exclude = ["id", "created_at", "updated_at"]
        fields_optional = ["image"]


class ProductInputSchema(Schema):
    name: str
    price: float | int | str
    stock: int | str
    category_id: int | str  # important : on attend un entier ici
    image: str | None = None
    method: str | None = None


class CategorySchemaIn(ModelSchema):
    class Meta:
        model = Category
        fields = ["title"]


class CategorySchemaOut(ModelSchema):
    class Meta:
        model = Category
        fields = "__all__"


class ProductSchemaOut(ModelSchema):
    category: Optional[CategorySchemaOut] = None

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


# class OrderSchemaIn(ModelSchema):
#     product_items: List[ProductItem]

#     class Meta:
#         model = Order
#         fields = "__all__"
#         fields_optional = ["status"]
#         exclude = ["id", "created_at", "updated_at", "customer"]


class OrderSchemaIn(Schema):
    productIds: List[str] | None = None
    customer_id: str
    status: str | None = None
    method: str | None = None


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
        | ProductSchemaOut
        | CategorySchemaOut
    ] = None
    missing_products: Optional[List[int]] = None


class ErrorResponseSchema(Schema):
    code: int
    description: str
