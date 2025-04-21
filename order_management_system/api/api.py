from ninja import NinjaAPI, Form
from .schema import *
from datetime import datetime
from django.http import HttpResponseRedirect

api = NinjaAPI()


@api.post("/customers", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
def create_customer(request, payload: Form[CustomerSchemaIn]):
    selected_product_ids = list(set(request.POST.getlist("selectedProduct[]")))

    try:
        customer = Customer.objects.create(
            name=payload.name,
            email=payload.email,
            address=payload.address,
            phone=payload.phone,
        )

        if len(selected_product_ids) > 0:
            order = Order.objects.create(
                customer_id=customer.id,
            )

            products_that_not_exist = []

            for id in selected_product_ids:
                product = Product.objects.filter(id=id).first()
                if product is not None and product.stock - 1 >= 0:
                    order_details = OrderDetails.objects.create(
                        product_id=product.id,
                        order_id=order.id,
                        quantity=1,
                        unit_price=product.price,
                    )
                    product.stock -= 1
                    product.save()
                else:
                    products_that_not_exist.append(id.id)

        if payload.method and payload.method == "ajax":
            return 200, {
                "code": 200,
                "description": f"Customer successfully created {"with his order initialized" if len(selected_product_ids) > 0 else "" }",
                "data": {
                    "id": customer.id,
                    "name": customer.name,
                    "email": customer.email,
                    "address": customer.address,
                    "phone": customer.phone,
                    "created_at": customer.created_at,
                    "updated_at": customer.updated_at,
                },
            }
        return HttpResponseRedirect("http://localhost:5173/customers")
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


# TODO: Modification en fonction du comportement de la vue final
@api.post(
    "/orders",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def create_order(request, payload: Form[OrderSchemaIn]):
    productIds = list(set(request.POST.getlist("productIds[]")))
    try:
        customer = Customer.objects.get(pk=payload.customer_id)
        order = Order.objects.create(customer_id=customer.id, status=payload.status)

        products_that_not_exist = []

        for id in productIds:
            product = Product.objects.filter(id=id).first()
            if product is not None and product.stock - 1 >= 0:
                order_details = OrderDetails.objects.create(
                    product_id=product.id,
                    order_id=order.id,
                    quantity=1,
                    unit_price=product.price,
                )
                product.stock -= 1
                product.save()
            else:
                products_that_not_exist.append(id)

        if payload.method and payload.method == "ajax":
            return 200, {
                "code": 200,
                "description": "Order successfully registered",
                "missing_products": (
                    products_that_not_exist if products_that_not_exist else None
                ),
            }
        return HttpResponseRedirect("http://localhost:5173/orders")

    except Customer.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.post(
    "/categories", response={200: SuccessResponseSchema, 400: ErrorResponseSchema}
)
def create_category(request, payload: CategorySchemaIn):
    try:
        category = Category.objects.create(title=payload.title)

        return 200, {
            "code": 200,
            "description": "Category successfully registered",
            "data": category,
        }
    except Category.DoesNotExist as e:
        return 400, {"code": 400, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.post("/products", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
def create_product(request, payload: Form[ProductInputSchema]):
    try:
        category = Category.objects.get(id=payload.category_id)

        product = Product.objects.create(
            name=payload.name,
            price=payload.price,
            stock=payload.stock,
            category=category,
        )

        if payload.method and payload.method == "ajax":
            return 200, {
                "code": 200,
                "description": "Product successfully registered",
                "data": product,
            }
        return HttpResponseRedirect("http://localhost:5173/products")

    except Category.DoesNotExist as e:
        return 400, {"code": 400, "description": str(e)}
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
    except Order.DoesNotExist as e:
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
    except Product.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}


@api.delete(
    "/categories/{id}",
    response={
        200: SuccessResponseSchema,
        400: ErrorResponseSchema,
        404: ErrorResponseSchema,
    },
)
def delete_category(request, id: int):
    try:
        category = Category.objects.get(pk=id)
        category.delete()

        return 200, {
            "code": 200,
            "description": "Category successfully deleted",
        }
    except Category.DoesNotExist as e:
        return 404, {"code": 404, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}
