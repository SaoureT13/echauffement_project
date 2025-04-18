import { Clock } from "lucide-react";

function OrderCard() {
    return (
        <div className="w-[260px] h-[260px] border-1 rounded-xl border-gray-300 p-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 border-dashed">
                <div className="flex flex-col">
                    <h3 className="font-bold">David Moore</h3>
                    <span className="text-[12px] text-gray-400">
                        +225 334444455
                    </span>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-[12px] capitalize text-amber-400 rounded-2xl">
                    pending
                </span>
            </div>
            <div className="flex flex-col py-4 border-b border-dashed border-gray-200">
                <span className="text-[14px] flex items-center gap-1 text-gray-400">
                    <Clock width={16} height={16} className="text-black" />
                    <span>11:00, 08 Feb 2024</span>
                </span>
                {/* <div></div> */}
            </div>
            <div className="flex flex-col pt-4">
                <div className="flex items-center justify-between text-md mb-2">
                    <span className="text-[14px]">3 Items</span>
                    <span className="text-[14px] text-blue-700">$22.00</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[14px]">1 Spaguetti Bolognese</span>
                    <span className="text-[14px] text-black">$22.00</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[14px]">3 Items</span>
                    <span className="text-[14px] text-black">$22.00</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[14px]">3 Items</span>
                    <span className="text-[14px] text-black">$22.00</span>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
