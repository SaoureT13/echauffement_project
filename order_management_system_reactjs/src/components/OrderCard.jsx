import { format } from "date-fns";
import { Clock } from "lucide-react";

function OrderCard({ order, onToggleStateModal, onChangeCurrentOrder }) {
    return (
        <div
            onClick={() => {
                onToggleStateModal();
                onChangeCurrentOrder(order);
            }}
            className="w-[260px] border-1 rounded-xl border-gray-300 p-4 
            transition-all duration-200 ease-in-out 
            hover:shadow-lg hover:border-blue-200 hover:scale-[1.02] 
            cursor-pointer"
        >
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 border-dashed">
                <div className="flex flex-col">
                    <h3 className="font-bold">{order?.customer?.name}</h3>
                    <span className="text-[12px] text-gray-400">
                        {order?.customer?.phone}
                    </span>
                </div>
                <span
                    className={`px-3 py-1  text-[12px] capitalize rounded-2xl ${
                        order?.status === "pending"
                            ? "text-amber-400 bg-amber-100"
                            : "text-green-400 bg-green-100"
                    }`}
                >
                    {order?.status}
                </span>
            </div>
            <div className="flex flex-col py-4 border-b border-dashed border-gray-200">
                <span className="text-[14px] flex items-center gap-1 text-gray-400">
                    <Clock width={16} height={16} className="text-black" />
                    <span>
                        {format(
                            new Date(order.created_at),
                            "HH:mm, dd MMM yyyy"
                        )}
                    </span>
                </span>
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex items-center justify-between text-md mb-2">
                    <span className="text-[14px]">
                        {order?.products.length} Items
                    </span>
                    <span className="text-[14px] text-blue-700">
                        $
                        {order?.products.reduce(
                            (acc, product) =>
                                acc + product.unit_price * product.quantity,
                            0
                        )}
                    </span>
                </div>
                {order?.products.slice(0, 3)?.map((product) => (
                    <div
                        className="flex items-center justify-between text-gray-400"
                        key={product.id}
                    >
                        <span className="text-[14px]">
                            {product.quantity}x {product.name}
                        </span>
                        <span className="text-[14px] text-black">
                            ${product.unit_price}
                        </span>
                    </div>
                ))}
                {order?.products.length > 3 && (
                    <span className="text-gray-400">...</span>
                )}
            </div>
        </div>
    );
}

export default OrderCard;
