import { useState } from "react";
import { Pencil } from "lucide-react";

function DropDownEditOrders({ order, icon }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`cursor-pointer w-full transition-all duration-200 ease-in-out`}
            >
                {icon}
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <ul className="py-1">
                        <li>
                            <a
                                href={`${
                                    import.meta.env.VITE_HTML_SERVER_URL
                                }/orders.html?id=${
                                    order.id
                                }&author=${encodeURIComponent(
                                    order.customer.name
                                )}&authorId=${encodeURIComponent(
                                    order.customer.id
                                )}
                                &date=${encodeURIComponent(
                                    order.created_at
                                )}&status=${encodeURIComponent(order.status)}${
                                    order.products.length > 0
                                        ? `&productIds=${order.products
                                              ?.map(
                                                  (product) =>
                                                      `${product.id}:${product.name}:${product.unit_price}`
                                              )
                                              .join(",")}`
                                        : ``
                                }`}
                                className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                            >
                                <Pencil width={18} />
                                Natif HTML
                            </a>
                        </li>
                        <li>
                            <a
                                href={`${
                                    import.meta.env.VITE_HTML_SERVER_URL
                                }/orders_ajax.html?id=${
                                    order.id
                                }&author=${encodeURIComponent(
                                    order.customer.name
                                )}&authorId=${encodeURIComponent(
                                    order.customer.id
                                )}
                                &date=${encodeURIComponent(
                                    order.created_at
                                )}&status=${encodeURIComponent(order.status)}${
                                    order.products.length > 0
                                        ? `&productIds=${order.products
                                              ?.map(
                                                  (product) =>
                                                      `${product.id}:${product.name}:${product.unit_price}`
                                              )
                                              .join(",")}`
                                        : ``
                                }`}
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

export default DropDownEditOrders;
