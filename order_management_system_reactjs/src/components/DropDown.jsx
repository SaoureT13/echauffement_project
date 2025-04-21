import { MoreVertical, Trash2, Check, Pencil } from "lucide-react";
import { useState } from "react";
import DropDownEditOrders from "./DropDownEditOrders";

function DropDown({ onDelete, order }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`p-1 rounded-sm ${
                    showDropdown ? "bg-gray-100" : "hover:bg-gray-100"
                } transition-colors cursor-pointer`}
            >
                <MoreVertical size={20} className="text-gray-500" />
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <ul className="py-1">
                        <DropDownEditOrders
                            icon={
                                <li>
                                    <button
                                        onClick={() => {
                                            // Handle delete
                                        }}
                                        className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                                    >
                                        <Pencil size={16} />
                                        Edit
                                    </button>
                                </li>
                            }
                            order={order}
                        />

                        <li>
                            <button
                                onClick={() => {
                                    // Handle delete
                                    onDelete();
                                    setShowDropdown(false);
                                }}
                                className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    // Handle complete
                                    setShowDropdown(false);
                                }}
                                className="w-full px-4 py-2 text-sm text-green-600 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                            >
                                <Check size={16} />
                                Close order
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;
