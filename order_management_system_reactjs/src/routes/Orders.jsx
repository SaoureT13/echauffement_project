import { Search, CirclePlus } from "lucide-react";
import BadgeButton from "../components/BadgeButton";
import OrderCard from "../components/OrderCard";
import Pagination from "../components/Pagination";
import { currentDate } from "../lib/utils";
import {
    useOrdersActions,
    useOrdersData,
    useOrdersError,
    useOrdersMainLoading,
} from "../store/ordersState";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import OrderDetailsModal from "../components/Modal/OrderDetailsModal";
import toast from "react-hot-toast";
import DropDownAddOrders from "../components/DropDownAddOrders";

function Orders() {
    const ordersData = useOrdersData();
    const ordersError = useOrdersError();
    const ordersMainLoading = useOrdersMainLoading();
    const { fetchOrders } = useOrdersActions();

    const [isModalActive, setIsModalActive] = useState(false);

    const [currentOrder, setCurrentOrder] = useState();

    const [currentPage, setCurrentPage] = useState(() => {
        if (ordersData) {
            return ordersData?.page?.currentPage;
        } else {
            return 1;
        }
    });

    const [limit, setLimit] = useState(() => {
        if (ordersData) {
            return ordersData?.page?.limit;
        } else {
            return 20;
        }
    });

    const [status, setStatus] = useState(null);

    const handleLimitChange = (limit) => {
        setLimit(limit);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleChangeStatus = (value) => {
        setStatus(value);
    };

    useEffect(() => {
        fetchOrders(limit, currentPage, status);
    }, [fetchOrders, limit, currentPage, status]);

    useEffect(() => {
        if (ordersError?.updateOrder) {
            toast.error(ordersError?.updateOrder.toString());
        }
    }, [ordersError]);

    useEffect(() => {
        if (ordersError?.deleteOrder) {
            toast.error(ordersError?.deleteOrder.toString());
        }
    }, [ordersError]);

    return (
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
            <header className="hidden flex-col px-8 py-[18.5px] border-b lg:flex gap-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-normal flex items-center gap-2">
                            Order List
                            <DropDownAddOrders
                                icon={
                                    <CirclePlus className="inline cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in-out" />
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
                        />
                    </div>
                </div>
                <div className="flex gap-4 relative w-full ">
                    <BadgeButton
                        active={status == null}
                        text={"All"}
                        onTap={() => handleChangeStatus(null)}
                    />
                    <BadgeButton
                        text={"pending"}
                        active={status == "pending"}
                        onTap={() => handleChangeStatus("pending")}
                    />
                    <BadgeButton
                        text={"completed"}
                        active={status == "completed"}
                        onTap={() => handleChangeStatus("completed")}
                    />
                </div>
            </header>
            <div className="w-full h-full px-8 py-5">
                <main className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))]  gap-4  justify-items-center lg:justify-items-stretch">
                    {ordersMainLoading == true ? (
                        <p>Loading...</p>
                    ) : ordersError?.fetchOrders ? (
                        <p className="text-red-500">
                            {ordersError?.fetchOrders}
                        </p>
                    ) : (
                        ordersData?.orders.map((order) => (
                            <OrderCard
                                order={order}
                                key={order.id}
                                onToggleStateModal={() =>
                                    setIsModalActive(true)
                                }
                                onChangeCurrentOrder={setCurrentOrder}
                            />
                        ))
                    )}
                </main>
                <div className="py-4 flex items-center justify-between gap-4">
                    <div>
                        <span className="capitalize">limit</span>
                        <select
                            name=""
                            id=""
                            className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
                            onChange={(e) =>
                                handleLimitChange(Number(e.target.value))
                            }
                        >
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={ordersData?.page?.totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            {isModalActive &&
                createPortal(
                    <OrderDetailsModal
                        order={currentOrder}
                        onToggleModalState={() => setIsModalActive((v) => !v)}
                    />,
                    document.body
                )}
        </div>
    );
}

export default Orders;
