from ninja import NinjaAPI
from .schema import *
from datetime import datetime

api = NinjaAPI()


@api.post("/customers", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
def create_customer(request, payload: CustomerSchemaIn):
    try:
        customer = Customer.objects.create(
            name=payload.name,
            email=payload.email,
            address=payload.address,
            registration_date=datetime.now(),
        )

        return 200, {
            "code": 200,
            "description": "Customer successfully created",
            "data": {
                "id": customer.id,
                "name": customer.name,
                "email": customer.email,
                "address": customer.address,
                "registration_date": customer.registration_date,
                "created_at": customer.created_at,
                "updated_at": customer.updated_at,
            },
        }
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


# TODO: Modification en fonction du comportement de la vue final
@api.post(
    "customers/{id}/orders",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def create_order(request, id: int, payload: OrderSchemaIn):
    try:
        customer = Customer.objects.get(pk=id)
        order = Order.objects.create(
            registration_date=datetime.now(),
            customer_id=customer.id,
        )

        products_that_not_exist = []

        for product_item in payload.product_items:
            product = Product.objects.filter(id=product_item.id).first()
            if product is not None and product.stock - product_item.quantity >= 0:
                order_details = OrderDetails.objects.create(
                    product_id=product.id,
                    order_id=order.id,
                    quantity=product_item.quantity,
                    unit_price=product.price,
                )
                product.stock -= product_item.quantity
                product.save()
            else:
                products_that_not_exist.append(product_item.id)

        return 200, {
            "code": 200,
            "description": "Order successfully registered",
            "missing_products": (
                products_that_not_exist if products_that_not_exist else None
            ),
        }
    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.post("/products", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
def create_product(request, payload: ProductSchemaIn):
    try:
        Product.objects.create(
            name=payload.name, stock=payload.stock, price=payload.price
        )

        return 200, {
            "code": 200,
            "description": "Product successfully registered",
        }
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.delete(
    "/customers/{id}",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def delete_customer(request, id: int):
    try:
        customer = Customer.objects.get(pk=id)
        customer.delete()

        return 200, {
            "code": 200,
            "description": "Customer successfully deleted",
        }
    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.delete(
    "/orders/{id}",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def delete_order(request, id: int):
    try:
        order = Order.objects.get(pk=id)
        order.delete()

        return 200, {
            "code": 200,
            "description": "Order successfully deleted",
        }
    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.delete(
    "/products/{id}",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def delete_product(request, id: int):
    try:
        product = Product.objects.get(pk=id)
        product.delete()

        return 200, {
            "code": 200,
            "description": "Product successfully deleted",
        }
    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}
