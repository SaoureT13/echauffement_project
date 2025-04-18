import { Search, CirclePlus } from "lucide-react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

function Customers() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
            <header className="hidden flex-col px-8 py-[18.5px] border-b lg:flex gap-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-normal">
                            Customers
                            <CirclePlus
                                className="inline cursor-pointer ml-2 hover:text-blue-500 transition-all duration-200 ease-in-out"
                                onClick={() => alert("hey")}
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
            </header>
            <div className="w-full h-full px-8 py-5">
                <main className="">
                    <Table />
                    <div className="py-4 flex items-center justify-end gap-4">
                        <div>
                            <span className="capitalize">limit</span>
                            <select
                                name=""
                                id=""
                                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
                            >
                                <option value="">20</option>
                                <option value="">30</option>
                                <option value="">40</option>
                            </select>
                        </div>
                        <Pagination />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Customers;
