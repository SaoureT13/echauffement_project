import { FileText, Store, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Root() {
    return (
        <div className="flex min-h-svh w-full">
            <div className="group peer hidden lg:block w-[17rem] shrink-0">
                <div className="h-svh inset-y-0 fixed w-[17rem] z-10">
                    <div className="flex h-full w-full flex-col border-r">
                        <div className="p-2 px-4 py-6 mb-10">
                            <Link to="/orders">
                                <h1
                                    className="text-3xl font-bold font-poppins"
                                    onClick={() => toast("Hello World")}
                                >
                                    GestionPro
                                </h1>
                            </Link>
                        </div>
                        <div className="flex-1 flex flex-col min-h-0 px-4">
                            <ul className="flex w-full min-w-0 flex-col gap-4">
                                <li className="group/menu-item relative ">
                                    <NavLink
                                        to="/orders"
                                        className="w-full flex text-gray-400 gap-2
                                        px-4 py-3 text-lg rounded-lg text-md transition-all duration-200 ease-in-out hover:bg-blue-50"
                                    >
                                        <FileText />
                                        <span>Order List</span>
                                    </NavLink>
                                </li>
                                <li className="group/menu-item relative ">
                                    <NavLink
                                        to="/products"
                                        className="w-full flex  gap-2
                                        px-4 py-3 text-lg rounded-lg text-md text-gray-400 transition-all duration-200 ease-in-out hover:bg-blue-50"
                                    >
                                        <Store />
                                        <span>Products</span>
                                    </NavLink>
                                </li>
                                <li className="group/menu-item relative ">
                                    <NavLink
                                        to="/customers"
                                        className="w-full flex  gap-2
                                        px-4 py-3 text-lg rounded-lg text-md text-gray-400 transition-all duration-200 ease-in-out hover:bg-blue-50"
                                    >
                                        <UserRound />
                                        <span>Customers</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-gray-50">
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
