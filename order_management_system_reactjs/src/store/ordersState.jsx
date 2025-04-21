import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const useOrdersState = create((set, get) => ({
    data: null,
    error: {
        fetchOrders: null,
        deleteOrder: null,
        updateOrder: null,
    },
    mainLoading: false,

    actions: {
        fetchOrders: async (limit = 20, page = 1, status = null) => {
            try {
                set({ mainLoading: true });
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_NODEJS_API_URL
                    }/orders?limit=${encodeURIComponent(
                        limit
                    )}&page=${encodeURIComponent(page)}${
                        status ? `&status=${status}` : ""
                    }`
                );

                if (response.status == 200) {
                    const data = response.data.data;
                    set({
                        data: data,
                        mainLoading: false,
                    });
                } else {
                    const error = response.data.description;
                    set({
                        mainLoading: false,
                        error: { ...get().error, fetchOrders: error },
                    });
                }
            } catch (error) {
                set({
                    mainLoading: false,
                    error: { ...get().error, fetchOrders: error.message },
                });
            }
        },
        updateOrder: async (body, id) => {
            try {
                const response = await axios.put(
                    `${import.meta.env.VITE_NODEJS_API_URL}/orders/${id}`,
                    body
                );

                if (response.status == 200) {
                    set({
                        data: {
                            ...get().data,
                            orders: get().data.orders?.map((order) => {
                                if (order.id == id) {
                                    return {
                                        ...order,
                                        status: body.status,
                                        products: order?.products
                                            .map((product) => {
                                                const updatedProduct =
                                                    body.product_items.find(
                                                        (p) =>
                                                            p.id ===
                                                            product.order_details_id
                                                    );

                                                if (updatedProduct) {
                                                    return {
                                                        ...product,
                                                        quantity:
                                                            updatedProduct.quantity,
                                                    };
                                                }
                                                return product;
                                            })
                                            .filter((product) =>
                                                body.product_items
                                                    .map((p) => p.id)
                                                    .includes(
                                                        product.order_details_id
                                                    )
                                            ),
                                    };
                                } else {
                                    return order;
                                }
                            }),
                        },
                    });
                   
                    toast.success("Order successfully updated");
                } else {
                    const error = response.data.description;
                    set({
                        error: {
                            ...get().error,
                            updateOrder: error,
                        },
                    });
                }
            } catch (error) {
                set({
                    error: {
                        ...get().error,
                        updateOrder: error.message,
                    },
                });
            }
        },
        deleteOrder: async (id) => {
            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_DJANGO_API_URL}/orders/${id}`
                );

                if (response.status == 200) {
                    set({
                        data: {
                            ...get().data,
                            orders: get().data.orders?.filter(
                                (order) => order.id != id
                            ),
                        },
                    });
                    toast.success("Order successfully deleted");
                } else {
                    const error = response.data.description;
                    set({
                        error: {
                            ...get().error,
                            deleteOrder: error,
                        },
                    });
                }
            } catch (error) {
                set({
                    error: {
                        ...get().error,
                        deleteOrder: error.message,
                    },
                });
            }
        },
    },
}));

export const useOrdersData = () => useOrdersState((state) => state.data);
export const useOrdersError = () => useOrdersState((state) => state.error);
export const useOrdersMainLoading = () =>
    useOrdersState((state) => state.mainLoading);

export const useOrdersActions = () => useOrdersState((state) => state.actions);
