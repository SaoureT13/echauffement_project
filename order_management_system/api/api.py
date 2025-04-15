from ninja import NinjaAPI
from .schema import *
from datetime import datetime

api = NinjaAPI()


@api.post("/customers", response={200: SuccessResponseSchema, 400: ErrorResponseSchema})
def create_customer(request, payload: CustomerSchemaIn):
    try:
        customer = Customer.objects.create(
            str_cust_name=payload.str_cust_name,
            str_cust_email=payload.str_cust_email,
            str_cust_adress=payload.str_cust_adress,
            dt_cust_dt_regist=datetime.now(),
        )

        return 200, {
            "code": 200,
            "description": "Customer succesfully created",
            "data": {
                "int_cust_pk": customer.int_cust_pk,
                "str_cust_name": customer.str_cust_name,
                "str_cust_email": customer.str_cust_email,
                "str_cust_adress": customer.str_cust_adress,
                "dt_cust_dt_regist": customer.dt_cust_dt_regist,
                "dt_cust_created_at": customer.dt_cust_created_at,
                "dt_cust_updated_at": customer.dt_cust_updated_at,
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
        customer = Customer.objects.get(pk=payload.int_cust_pk)
        order = Order.objects.create(
            dt_order_dt_regist=datetime.now(),
            str_order_status=payload.str_order_status,
            int_customer_fk=customer.int_customer_fk,
        )

        products_that_not_exist = []

        for product_id in payload.product_ids:
            product = Product.objects.filter(int_pro_pk=product_id["int_pro_pk"])
            if product is not None:
                order_details = OrderDetails.objects.create(
                    int_pro_fk=product.int_pro_pk,
                    int_order_fk=order.int_order_pk,
                    int_pro_qty=payload.product_id["int_pro_qty"],
                    dbl_inutary_price=product.dbl_pro_price,
                )
            else:
                products_that_not_exist.append(product_id)

        return 200, {"code": 200, "description": "Order succesfully registered"}
    except Customer.DoesNotExist as e:
        return 404, {"code": 400, "description": str(e)}
    except Exception as e:
        return 400, {"code": 400, "description": str(e)}
