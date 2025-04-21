import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import OrderPanel from "../OrderPanel";
import BadgeButton from "../BadgeButton";
import DropDown from "../DropDown";
import { format } from "date-fns";
import { useOrdersActions, useOrdersError } from "../../store/ordersState";

function OrderDetailsModal({ order, onToggleModalState }) {
    const [initialOrder, setInitialOrder] = useState(order);
    const [currentOrder, setCurrentOrder] = useState(order);
    const [isModified, setIsModified] = useState(false);

    const { updateOrder, deleteOrder } = useOrdersActions();
    const ordersError = useOrdersError;

    useEffect(() => {
        setIsModified(
            JSON.stringify(initialOrder) !== JSON.stringify(currentOrder)
        );
    }, [currentOrder, initialOrder]);

    const handleQuantityChange = (productId, newQuantity) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            products: prevOrder.products.map((product) =>
                product.id === productId
                    ? { ...product, quantity: newQuantity }
                    : product
            ),
        }));
    };

    const handleProductRemove = (productId) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            products: prevOrder.products.filter(
                (product) => product.id !== productId
            ),
        }));
    };

    const handleChangeStatus = (status) => {
        setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            status: status,
        }));
    };

    const handleCancel = () => {
        setCurrentOrder(initialOrder);
    };

    const handleSave = async () => {
        try {
            const dataToSend = {
                product_items: currentOrder.products.map((product) => ({
                    id: product.order_details_id,
                    quantity: product.quantity,
                })),
                status: currentOrder.status,
            };

            updateOrder(dataToSend, currentOrder.id);
            if (!ordersError?.updateOrder) {
                onToggleModalState();
            }
        } catch (error) {
            console.error("Failed to save changes:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            deleteOrder(id);
            if (!ordersError?.deleteProduct) {
                onToggleModalState();
            }
        } catch (error) {
            console.error("Failed to delete:", error);
        }
    };

    return (
        <div className="fixed min-w-full min-h-screen top-0 left-0 z-10 font-outfit">
            <div
                onClick={onToggleModalState}
                className="hover:cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"
            ></div>
            <div className="absolute -bottom-1 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-full sm:max-w-xl bg-white dark:bg-very-dark-grey rounded-md">
                <div className="rounded-md p-6 flex flex-col gap-4 relative">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl">Order Details</h1>{" "}
                        <DropDown
                            onDelete={() => handleDelete(currentOrder.id)}
                            order={order}
                        />
                    </div>

                    <div>
                        <div className="mb-6">
                            <p className="text-2xl">#{currentOrder.id}</p>
                        </div>
                        <div className="pb-6 flex justify-between">
                            <div>
                                <p className="text-gray-400">Author: </p>{" "}
                                <p>{currentOrder.customer.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Order date: </p>{" "}
                                <span>
                                    {format(
                                        new Date(currentOrder.created_at),
                                        "HH:mm, dd MMM yyyy"
                                    )}
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400">Status: </p>{" "}
                                <span
                                    className={`px-3 py-1 text-[12px] capitalize rounded-2xl cursor-pointer ${
                                        currentOrder?.status === "pending"
                                            ? "text-amber-400 bg-amber-100"
                                            : "text-green-400 bg-green-100"
                                    }`}
                                    onClick={() => {
                                        if (currentOrder.status == "pending") {
                                            handleChangeStatus("completed");
                                        }
                                        if (
                                            currentOrder.status == "completed"
                                        ) {
                                            handleChangeStatus("pending");
                                        }
                                    }}
                                >
                                    {currentOrder?.status}
                                </span>
                            </div>
                        </div>

                        <div className="border-y-1 mb-6">
                            {currentOrder?.products.map((product) => (
                                <OrderPanel
                                    key={product.id}
                                    product={product}
                                    onQuantityChange={(newQuantity) =>
                                        handleQuantityChange(
                                            product.id,
                                            newQuantity
                                        )
                                    }
                                    onRemove={() =>
                                        handleProductRemove(product.id)
                                    }
                                />
                            ))}
                        </div>

                        <div className="flex justify-end mb-6">
                            <div>
                                <p className="text-gray-400">
                                    Total:{" "}
                                    <span className="text-blue-700">
                                        $
                                        {currentOrder?.products.reduce(
                                            (acc, product) =>
                                                acc +
                                                product.unit_price *
                                                    product.quantity,
                                            0
                                        )}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {isModified && (
                            <div className="flex justify-start gap-2">
                                <button
                                    onClick={handleSave}
                                    className="gap-2 px-6 py-2 rounded-xl text-sm capitalize cursor-pointer bg-blue-500 text-white"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="gap-2 px-6 py-2 rounded-xl text-sm capitalize cursor-pointer bg-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsModal;
