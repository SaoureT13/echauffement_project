import { Trash2, MoreVertical } from "lucide-react";
import { createPortal } from "react-dom";
import ModalDelete from "./Modal/DeleteModal";
import { useState } from "react";
import DropDownEditProduct from "./DropDownEditProduct";

function ProductCard({ product }) {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <div className="w-[260px] border-1 rounded-xl border-gray-300 p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="group w-full h-[160px] flex items-center justify-center relative">
                <img
                    src={product.image || "/iphone14.png"}
                    alt={product.name || "Product Image"}
                    className="max-h-full object-contain rounded-xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 w-full"
                />

                <div className="flex flex-col opacity-0 absolute top-1 right-2 group-hover:opacity-100 transition-all duration-200 ease-in-out">
                    <DropDownEditProduct
                        product={product}
                        icon={<MoreVertical size={20} className="text-black" />}
                    />
                    <button
                        onClick={() => setIsModalActive(true)}
                        className="cursor-pointer px-2 py-1 rounded-full hover:bg-black/10 transition-all duration-200 ease-in-out"
                    >
                        <Trash2 width={18} />
                    </button>
                </div>
            </div>
            <div className="mt-4 relative">
                <h3 className="mb-1 underline capitalize text-lg font-semibold">
                    {product.name}
                </h3>
                <div className="flex justify-between text-[14px]">
                    <span className="capitalize text-gray-400">price</span>
                    <span className="font-medium text-gray-700">
                        ${product.price}
                    </span>
                </div>
                <div className="flex justify-between text-[14px]">
                    <span className="capitalize text-gray-400">stock</span>
                    <span className="font-medium text-gray-700 flex items-center">
                        {product.stock < 10 ? (
                            <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[12px]">
                                {product.stock}
                            </span>
                        ) : (
                            `${product.stock}`
                        )}
                    </span>
                </div>
                <div className="flex align-center justify-between text-[14px]">
                    <span className="capitalize text-gray-400">Category</span>
                    <span
                        className="text-center flex items-center capitalize text-sm text-blue-600 "
                        style={{ fontWeight: "500" }}
                    >
                        {product?.category?.title}
                    </span>
                </div>
            </div>
            {isModalActive &&
                createPortal(
                    <ModalDelete
                        onHandleClose={() => setIsModalActive((v) => !v)}
                        whatIsIt={"product"}
                        current={product}
                    />,
                    document.body
                )}
        </div>
    );
}

export default ProductCard;
