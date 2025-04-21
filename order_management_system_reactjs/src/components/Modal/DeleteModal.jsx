import { useCustomersActions } from "../../store/customersState";
import { useProductsAction } from "../../store/productState";

function ModalDelete({ onHandleClose, current, whatIsIt }) {
    const { deleteProduct } = useProductsAction();
    const { deleteCustomer } = useCustomersActions();

    const handleDelete = (id) => {
        // if (whatIsIt == "user") {
        //     deleteBoard(id);
        // }
        if (whatIsIt == "product") {
            deleteProduct(id);
        }
        if (whatIsIt == "customer") {
            deleteCustomer(id);
        }
        // if (whatIsIt == "order") {
        //     deleteTask(id);
        // }
        onHandleClose();
    };

    const handleCancel = () => {
        onHandleClose();
    };

    return (
        <div className="fixed min-w-full min-h-screen top-0 left-0 z-10 font-outfit">
            <div
                onClick={onHandleClose}
                className="hover:cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"
            ></div>
            <div className="absolute -bottom-1 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] w-full sm:max-w-md bg-white dark:bg-very-dark-grey rounded-md">
                <div className="rounded-md p-6 flex flex-col gap-4">
                    <div>
                        <h3 className="text-2xl text-red-600 font-bold">
                            Delete this {whatIsIt} ?
                        </h3>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-400">
                            Are you sure you want to delete the "
                            <span className="text-black">
                                {current?.title || current?.name}
                            </span>
                            " <br />
                            This action cannot be reversed{" "}
                            <span className="underline">
                                and delete this registration and those linked to
                                it
                            </span>
                            .
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-8">
                        <button
                            onClick={() => handleDelete(current.id)}
                            className="p-2 bg-red-500 hover:bg-red-600 text-white capitalize font-bold rounded-full w-1/2 transition-all duration-150 ease-in-out cursor-pointer"
                        >
                            Delete
                        </button>
                        <button
                            onClick={handleCancel}
                            className="p-2 bg-light-grey text-blue-500 hover:text-opacity-50 cursor-pointer text-base capitalize font-bold rounded-full w-1/2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;
