import { Pencil, Trash2, Smartphone } from "lucide-react";

function ProductCard() {
    return (
        <div className="w-[260px] border-1 rounded-xl border-gray-300 p-2">
            <div className="group w-full h-[160px] flex items-center justify-center relative">
                <img
                    src="/iphone14.png"
                    alt="Beef Crowich"
                    className="max-h-full object-contain rounded-xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 w-full"
                />

                <div className="flex flex-col opacity-0 absolute top-1 right-2 group-hover:opacity-100 transition-all duration-200 ease-in-out">
                    <button className="cursor-pointer px-2 py-1  rounded-full hover:bg-black/10 transition-all duration-200 ease-in-out">
                        <Pencil width={18} />
                    </button>
                    <button className="cursor-pointer px-2 py-1  rounded-full hover:bg-black/10 transition-all duration-200 ease-in-out">
                        <Trash2 width={18} />
                    </button>
                </div>
            </div>
            <div className="mt-4 relative">
                <h3 className="text-gray-800 mb-1 underline capitalize">
                    Apple MacBook Air M3
                </h3>
                <div className="flex justify-between">
                    <span className="capitalize">price</span>
                    <span className="" style={{ fontWeight: "500" }}>
                        $1099.99
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="capitalize">stock</span>
                    <span className="" style={{ fontWeight: "500" }}>
                        $1099.99
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="capitalize">Category</span>
                    <span
                        className="text-center capitalize bg-amber-100 px-2 text-amber-400 rounded-full text-sm"
                        style={{ fontWeight: "500" }}
                    >
                        smartphone
                        <Smartphone width={16} className="inline" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
