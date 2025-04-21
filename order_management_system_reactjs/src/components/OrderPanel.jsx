import { Trash2 } from "lucide-react";

function OrderPanel({ product, onQuantityChange, onRemove }) {
    return (
        <div className="relative flex justify-between items-center border-b-1 last:border-none">
            <div
                className="flex rounded items-center w-[100px] sm:w-[54px] h-[54px] shrink-0 bg-contain bg-no-repeat bg-white bg-center"
                style={{
                    backgroundImage: "url('/iphone14.jpg')",
                }}
            ></div>
            <div className="flex ml-4 w-full justify-between">
                <div className="shrink-0 mb-auto">
                    <h1 className="text-[16px] leading-4">{product?.name}</h1>
                    <p className="text-sm font-bold leading-4">
                        ${product?.unit_price}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="Custom"
                            className="border-2 px-2 rounded-md w-20"
                            min="1"
                            value={product?.quantity}
                            onChange={(e) =>
                                onQuantityChange(Number(e.target.value))
                            }
                        />
                    </div>
                    <button
                        onClick={onRemove}
                        className="flex items-center justify-center w-7 h-7 bg-red-200 text-red-500 rounded font-bold cursor-pointer"
                    >
                        <Trash2 width={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderPanel;
