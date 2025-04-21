import { MoreVertical, Trash2, Check, Pencil } from "lucide-react";
import { useState } from "react";

function DropDownAddCustomers({ icon }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`cursor-pointer px-2 py-1 rounded-full transition-all duration-200 ease-in-out
                }`}
            >
                {icon}
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <ul className="py-1">
                        <li>
                            <a
                                href={`http://localhost:5374/customers.html`}
                                className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                            >
                                <Pencil width={18} />
                                Natif HTML
                            </a>
                        </li>
                        <li>
                            <a
                                href={`http://localhost:5374/customers_ajax.html`}
                                className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                            >
                                <Pencil width={18} />
                                With AJAX
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDownAddCustomers;
