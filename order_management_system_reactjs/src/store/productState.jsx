import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const useProductsStore = create((set, get) => ({
    data: null,
    error: {
        fetchProducts: null,
        deleteProduct: null,
    },
    mainLoading: false,

    actions: {
        fetchProducts: async (
            limit = 20,
            page = 1,
            categoryIds = [],
            stock = null,
            search = null
        ) => {
            console.log(search)
            try {
                set({ mainLoading: true });
                const response = await axios.get(
                    `${
                        import.meta.env.VITE_NODEJS_API_URL
                    }/products?limit=${encodeURIComponent(
                        limit
                    )}&page=${encodeURIComponent(page)}&${
                        categoryIds.length > 0
                            ? categoryIds
                                  .map((id) => {
                                      return `categoryIds=${encodeURIComponent(
                                          parseInt(id)
                                      )}`;
                                  })
                                  .join("&")
                            : ""
                    }${
                        stock
                            ? `&${Object.entries(stock)
                                  .map(([key, value]) => {
                                      if (value != null) {
                                          return `${key}=${value}`;
                                      } else {
                                          return "";
                                      }
                                  })
                                  .join("&")}`
                            : ""
                    }${search ? `&name=${search}` : ""}`
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
                        error: { ...get().error, fetchProducts: error },
                    });
                }
            } catch (error) {
                set({
                    mainLoading: false,
                    error: { ...get().error, fetchProducts: error.message },
                });
            }
        },
        deleteProduct: async (id) => {
            try {
                const response = await axios.delete(
                    `${import.meta.env.VITE_DJANGO_API_URL}/products/${id}`
                );

                if (response.status == 200) {
                    set({
                        data: {
                            ...get().data,
                            products: get().data.products?.filter(
                                (product) => product.id != id
                            ),
                        },
                    });
                    toast.success("Product successfully deleted");
                } else {
                    const error = response.data.description;
                    set({
                        error: {
                            ...get().error,
                            deleteProduct: error,
                        },
                    });
                }
            } catch (error) {
                set({
                    error: {
                        ...get().error,
                        deleteProduct: error.message,
                    },
                });
            }
        },
    },
}));

export const useData = () => useProductsStore((state) => state.data);
export const useError = () => useProductsStore((state) => state.error);
export const useMainLoading = () =>
    useProductsStore((state) => state.mainLoading);

export const useProductsAction = () =>
    useProductsStore((state) => state.actions);
