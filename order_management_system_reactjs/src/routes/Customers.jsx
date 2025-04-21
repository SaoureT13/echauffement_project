import { Search, CirclePlus } from "lucide-react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { currentDate } from "../lib/utils";
import {
    useCustomersActions,
    useCustomersData,
    useCustomersError,
    useCustomersMainLoading,
} from "../store/customersState";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalDelete from "../components/Modal/DeleteModal";
import toast from "react-hot-toast";
import DropDownAddCustomers from "../components/DropDownAddCustomers";

function Customers() {
    const customersData = useCustomersData();
    const customersError = useCustomersError();
    const customersMainLoading = useCustomersMainLoading();
    const { fetchCustomers } = useCustomersActions();

    const [isModalActive, setIsModalActive] = useState(false);

    const [currentCustomer, setCurrentCustomer] = useState();

    const [currentPage, setCurrentPage] = useState(() => {
        if (customersData) {
            return customersData?.page?.currentPage;
        } else {
            return 1;
        }
    });

    const [limit, setLimit] = useState(() => {
        if (customersData) {
            return customersData?.page?.limit;
        } else {
            return 20;
        }
    });

    const [search, setSearch] = useState("");

    const handleLimitChange = (limit) => {
        setLimit(limit);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleChangeSearch = (value) => {
        setSearch(value);
    };

    useEffect(() => {
        fetchCustomers(limit, currentPage, search);
    }, [fetchCustomers, limit, currentPage, search]);

    useEffect(() => {
        if (customersError?.deleteCustomer) {
            toast.error(customersError?.deleteCustomer.toString());
        }
    }, [customersError]);

    return (
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
            <header className="hidden flex-col px-8 py-[18.5px] border-b lg:flex gap-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-normal flex items-center">
                            Customers
                            <DropDownAddCustomers
                                icon={
                                    <CirclePlus className="inline cursor-pointer ml-2 hover:text-blue-500 transition-all duration-200 ease-in-out" />
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
                            value={search || null}
                            onChange={(e) => handleChangeSearch(e.target.value)}
                        />
                    </div>
                </div>
            </header>
            <div className="w-full h-full px-8 py-5">
                <main className="">
                    {customersMainLoading == true ? (
                        <p>Loading...</p>
                    ) : customersError?.fetchCustomers ? (
                        <p className="text-red-500">{`Error: ${customersError?.fetchCustomers}`}</p>
                    ) : (
                        <Table
                            customers={customersData?.customers}
                            onChangeCurrentCustomer={setCurrentCustomer}
                            onToggleModal={setIsModalActive}
                        />
                    )}
                    <div className="py-4 flex items-center justify-between gap-4">
                        <div>
                            <span className="capitalize">limit</span>
                            <select
                                name=""
                                id=""
                                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
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
                            totalPages={customersData?.page?.totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </main>
            </div>
            {isModalActive &&
                createPortal(
                    <ModalDelete
                        onHandleClose={() => setIsModalActive((v) => !v)}
                        whatIsIt={"customer"}
                        current={currentCustomer}
                    />,
                    document.body
                )}
        </div>
    );
}

export default Customers;
