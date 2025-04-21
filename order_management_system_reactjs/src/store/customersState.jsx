import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const useCustomersState = create((set, get) => ({
    data: null,
    error: {
        fetchCustomers: null,
        deleteCustomer: null,
    },
    mainLoading: false,

    actions: {
        fetchCustomers: async (limit = 20, page = 1, search = null) => {
            try {
                set({ mainLoading: true });
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_NODEJS_API_URL
                    }/customers?limit=${encodeURIComponent(
                        limit
                    )}&page=${encodeURIComponent(page)}${
                        search ? `&name=${search}` : ""
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
                        error: { ...get().error, fetchCustomers: error },
                    });
                }
            } catch (error) {
                set({
                    mainLoading: false,
                    error: { ...get().error, fetchCustomers: error.message },
                });
            }
        },
        deleteCustomer: async (id) => {
            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_DJANGO_API_URL}/customers/${id}`
                );

                if (response.status == 200) {
                    set({
                        data: {
                            ...get().data,
                            customers: get().data.customers?.filter(
                                (customer) => customer.id != id
                            ),
                        },
                    });
                    toast.success("Customers successfully deleted");
                } else {
                    const error = response.data.description;
                    set({
                        error: {
                            ...get().error,
                            deleteCustomer: error,
                        },
                    });
                }
            } catch (error) {
                set({
                    error: {
                        ...get().error,
                        deleteCustomer: error.message,
                    },
                });
            }
        },
    },
}));

export const useCustomersData = () => useCustomersState((state) => state.data);
export const useCustomersError = () =>
    useCustomersState((state) => state.error);
export const useCustomersMainLoading = () =>
    useCustomersState((state) => state.mainLoading);

export const useCustomersActions = () =>
    useCustomersState((state) => state.actions);
