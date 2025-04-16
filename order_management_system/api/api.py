from ninja import NinjaAPI
from .schema import *
from datetime import datetime

api = NinjaAPI()


# @api.get("/customers", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
# def retrieve_customers(request):
#     try:
#         customers = Customer.objects.all()
#         for customer in customers:
#             customer.count_orders = customer.orders.count()

#         return 200, {
#             "code": 200,
#             "description": "Customers succesfully retrieve",
#             "data": customers,
#         }
#     except Exception as e:
#         return 400, {"code": 400, "description": str(e)}


# @api.get("/products", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
# def retrieve_products(request):
#     try:
#         products = Product.objects.all()

#         return 200, {
#             "code": 200,
#             "description": "Products succesfully retrieve",
#             "data": products,
#         }
#     except Exception as e:
#         return 400, {"code": 400, "description": str(e)}


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
            },
        }
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.post(
    "/orders",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def create_order(request, payload: OrderSchemaIn):
    try:
        customer = Customer.objects.get(pk=payload.customer_id)
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

        # if products_that_not_exist:
        #     return 400, {
        #         "code": 400,
        #         "description": "Some products do not exist or have insufficient stock",
        #         "missing_products": products_that_not_exist,
        #     }

        return 200, {
            "code": 200,
            "description": "Order successfully registered",
        }
    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
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
