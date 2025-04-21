import {
    Monitor,
    Search,
    Laptop,
    Smartphone,
    Headphones,
    Video,
    CirclePlus,
    Watch,
} from "lucide-react";
import BadgeButton from "../components/BadgeButton";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { currentDate } from "../lib/utils";
import {
    useError,
    useMainLoading,
    useData,
    useProductsAction,
} from "../store/productState";

import { useEffect, useState } from "react";
import {
    useCategoriesActions,
    useCategoriesData,
    useCategoriesError,
    useCategoriesMainLoading,
} from "../store/categoriesState";
import toast from "react-hot-toast";
import DropDownAddProduct from "../components/DropDownAddProduct";

function Products() {
    const productsData = useData();
    const productsMainLoading = useMainLoading();
    const productsError = useError();
    const { fetchProducts } = useProductsAction();

    const categoriesData = useCategoriesData();
    const categoriesMainLoading = useCategoriesMainLoading();
    const categoriesError = useCategoriesError();

    const { fetchCategories } = useCategoriesActions();

    const [search, setSearch] = useState();
    const [categoryIds, setCategoryIds] = useState([]);
    const [stock, setStock] = useState({
        stockMin: null,
        stockMax: null,
    });

    const [currentPage, setCurrentPage] = useState(() => {
        if (productsData) {
            return productsData?.page?.currentPage;
        } else {
            return 1;
        }
    });

    const [limit, setLimit] = useState(() => {
        if (productsData) {
            return productsData?.page?.limit;
        } else {
            return 20;
        }
    });

    const handleChangeSearch = (value) => {
        setSearch(value);
    };

    const handleChangeCategoryIds = (newId = null, clean = false) => {
        if (clean) {
            setCategoryIds([]);
        } else {
            setCategoryIds((prevCategoryIds) => {
                return prevCategoryIds.includes(newId)
                    ? prevCategoryIds.filter((id) => id !== newId)
                    : [...prevCategoryIds, newId];
            });
        }
    };

    const handleLimitChange = (limit) => {
        setLimit(limit);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchProducts(limit, currentPage, categoryIds, null, search);
    }, [limit, currentPage, fetchProducts, search, categoryIds]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        if (productsError?.deleteProduct) {
            toast.error(productsError?.deleteProduct.toString());
        }
    }, [productsError]);

    return (
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
            <header className="hidden flex-col px-8 py-[18.5px] border-b lg:flex gap-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-normal flex items-center">
                            Products
                            {/* 
                            <CirclePlus
                                className="inline cursor-pointer ml-2 hover:text-blue-500 transition-all duration-200 ease-in-out"
                                onClick={() => alert("hey")}
                            /> 
                            */}
                            <DropDownAddProduct
                                icon={
                                    <CirclePlus className="inline cursor-pointer ml-2 hover:text-blue-500 transition-all duration-200 ease-in-out" />
                                }
                            />
                        </h1>
                        <span className="text-sm text-gray-400">
                            {currentDate}
                        </span>
                    </div>
                    <div className="flex h-9 bg-white relative w-[300px]">
                        <span className="absolute top-1/2 left-2 -translate-y-1/2">
                            <Search width={18} height={18} />
                        </span>
                        <input
                            type="text"
                            className="flex h-full w-full rounded-md border-1 border-gray-300 pl-10 focus:outline-0 text-[14px]"
                            placeholder="Search..."
                            value={search || ""}
                            onChange={(e) => handleChangeSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-4 relative w-full pb-4 border-b border-gray-300">
                    <BadgeButton
                        active={categoryIds?.length == 0}
                        text={"All"}
                        onTap={() => handleChangeCategoryIds(null, true)}
                    />
                    {categoriesMainLoading == false &&
                        categoriesError == null &&
                        categoriesData.map((category) => (
                            <BadgeButton
                                key={category.id}
                                text={category.title}
                                icon={getRightIcon(category.title)}
                                onTap={() =>
                                    handleChangeCategoryIds(category.id)
                                }
                                active={categoryIds?.includes(category.id)}
                            />
                        ))}
                </div>
                <div className="flex gap-2">
                    <div className="w-[120px] h-10 bg-white">
                        <input
                            type="number"
                            placeholder="Min Stock"
                            className="flex h-full w-full rounded-md border-1 border-gray-300 p-2 focus:outline-0 text-[14px]"
                            value={stock.stockMin || ""}
                            onChange={(e) =>
                                setStock((prev) => ({
                                    ...prev,
                                    stockMin: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="w-[120px] h-10 bg-white">
                        <input
                            type="number"
                            placeholder="Max Stock"
                            className="flex h-full w-full rounded-md border-1 border-gray-300 p-2 focus:outline-0 text-[14px]"
                            value={stock.stockMax || ""}
                            onChange={(e) =>
                                setStock((prev) => ({
                                    ...prev,
                                    stockMax: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <button
                        className="bg-blue-600 text-white px-2 rounded-xl cursor-pointer"
                        onClick={() =>
                            fetchProducts(
                                limit,
                                currentPage,
                                categoryIds,
                                stock,
                                search
                            )
                        }
                    >
                        Sort
                    </button>
                </div>
            </header>
            <div className="w-full h-full px-8 py-5">
                <main className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 justify-items-center lg:justify-items-stretch">
                    {productsMainLoading == true ? (
                        <p>Loading...</p>
                    ) : productsError.fetchProducts ? (
                        <p className="text-red-500">
                            Error: {productsError.fetchProducts}
                        </p>
                    ) : (
                        productsData?.products?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </main>
                <div className="py-4 flex items-center justify-end gap-4"></div>
                <div>
                    <span className="capitalize">limit</span>
                    <select
                        className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
                        value={limit}
                        onChange={(e) =>
                            handleLimitChange(Number(e.target.value))
                        }
                    >
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                </div>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    totalPages={productsData?.page?.totalPages}
                />
            </div>
        </div>
    );
}

function getRightIcon(title) {
    switch (title.toLowerCase()) {
        case "monitor":
            return <Monitor width={18} height={18} />;
        case "laptop":
            return <Laptop width={18} height={18} />;
        case "smartphone":
            return <Smartphone width={18} height={18} />;
        case "headphones":
            return <Headphones width={18} height={18} />;
        case "camera":
            return <Video width={18} height={18} />;
        case "watch":
            return <Watch width={18} height={18} />;
        default:
            return null;
    }
}

export default Products;
