import { Pencil, Trash2 } from "lucide-react";
import ModalDelete from "./Modal/DeleteModal";
import DropDownEditCustomers from "./DropDownEditCustomers";

const Table = ({ customers, onChangeCurrentCustomer, onToggleModal }) => {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className=" min-w-full bg-white shadow">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        <th className="p-3 whitespace-nowrap">Name</th>
                        <th className="p-3 whitespace-nowrap">Phone</th>
                        <th className="p-3 whitespace-nowrap">Email</th>
                        <th className="p-3 whitespace-nowrap">Address</th>
                        <th className="p-3 whitespace-nowrap w-16">Orders</th>
                        <th className="p-3 whitespace-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                    {customers?.map((customer, index) => (
                        <tr
                            key={index}
                            className="border-t border-gray-300 text-sm"
                        >
                            <td className="p-3 flex items-center gap-3 whitespace-nowrap">
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {customer.name}
                                    </div>
                                </div>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {customer?.phone}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {customer?.email}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {customer?.address}
                            </td>
                            <td className="p-3 whitespace-nowrap text-center">
                                {customer?.orders_count}
                            </td>
                            <td className="p-3 whitespace-nowrap flex gap-2">
                                <DropDownEditCustomers
                                    customer={customer}
                                    icon={
                                        <button className="px-3 py-1 flex items-center gap-1 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer">
                                            <Pencil width={14} />
                                            Edit
                                        </button>
                                    }
                                />
                                <button
                                    className="px-3 py-1 flex items-center gap-1 text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
                                    onClick={() => {
                                        onToggleModal(true);
                                        onChangeCurrentCustomer(customer);
                                    }}
                                >
                                    <Trash2 width={14} />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
