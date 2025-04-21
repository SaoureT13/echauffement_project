import axios from "axios";
import { create } from "zustand";

const useCategoriesStore = create((set) => ({
    data: null,
    error: null,
    mainLoading: null,

    actions: {
        fetchCategories: async () => {
            try {
                set({ mainLoading: true });
                const response = await axios.get(
                    `${import.meta.env.VITE_NODEJS_API_URL}/categories`
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
                        error: error,
                    });
                }
            } catch (error) {
                set({ error: error.message });
            }
        },
    },
}));

export const useCategoriesData = () =>
    useCategoriesStore((state) => state.data);
export const useCategoriesError = () =>
    useCategoriesStore((state) => state.error);
export const useCategoriesMainLoading = () =>
    useCategoriesStore((state) => state.mainLoading);

export const useCategoriesActions = () =>
    useCategoriesStore((state) => state.actions);
