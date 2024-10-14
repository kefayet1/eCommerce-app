import { clearProduct, removeProduct } from "@/features/billSlice";
import { router } from "@inertiajs/react";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BelliedTo = ({ MyClassName }) => {
    const bills = useSelector((state) => state.bills);
    const [discountInput, setDiscountInput] = useState(0);
    const [showDiscount, setShowDiscount] = useState(0);
    const [toastMessage, setToastMessage] = useState({
        open: false,
        severity: "error",
        message: "",
    });

    const dispatch = useDispatch();

    const totalBill =
        bills[0]?.product.reduce(
            (acc, crntProd) => acc + crntProd.totalPrice,
            0
        ) || "";

    let payable = totalBill + (totalBill * 5) / 100;

    const handleDiscount = (value) => {
        setDiscountInput(value);
        payable = totalBill - (totalBill * discountInput) / 100;
        setShowDiscount(payable);
    };

    const handleSubmitInvoice = () => {
        if (bills.length === 0) {
            setToastMessage((prev) => ({
                ...prev,
                open: true,
                message: "Please select a customers and and product",
            }));
            return;
        }

        router.post(
            "/createInvoice",
            {
                total: totalBill,
                discount: discountInput,
                payable: payable,
                vat: 5,
                customer_id: bills[0].id,
                products: bills[0]?.product,
            },
            {
                onSuccess: (page) => {
                    setToastMessage({
                        severity: 'success',
                        open: true,
                        message: "Invoice has been created.",
                    });
                },
                onError: (page) =>{
                    setToastMessage({
                        severity: 'error',
                        open: true,
                        message: "something is wrong!",
                    });
                }
            }
        );

        setDiscountInput(0);
        dispatch(clearProduct());
    };

    const handleClose = () => {
        setToastMessage((prev) => ({ ...prev, open: false }));
    };

    return (
        <div
            className={`p-5 md:shadow-2xl shadow-lg mt-5 m-3 rounded-md ${MyClassName}`}
        >
            <Snackbar
                open={toastMessage.open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={toastMessage.severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {toastMessage.message}
                </Alert>
            </Snackbar>

            <div className="top flex justify-between ">
                <div className="topLeft">
                    <b>BELLED TO</b>
                    <div className="">
                        <span>Name: </span>
                        <span>{bills[0]?.name}</span>
                    </div>
                    <div className="">
                        <span>Email: </span>
                        <span>{bills[0]?.email}</span>
                    </div>
                    <div className="">User Id: {bills[0]?.id}</div>
                </div>
                <div className="topRight">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="">
                        <b>Invoice</b>
                    </div>
                    <div className="">
                        <p>Date</p>
                        2023-08-13
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Qty
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Total
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bills[0]?.product.map((prod) => (
                                            <tr key={prod.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {prod.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.unit}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.price}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.totalPrice}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                        onClick={() =>
                                                            dispatch(
                                                                removeProduct(
                                                                    prod.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="totalSeleInfo mt-5">
                    <p>
                        <b>TOTAL: {totalBill}</b>
                    </p>
                    <p>
                        <b>
                            PAYABLE: {showDiscount ? showDiscount : totalBill}
                        </b>
                    </p>
                    <p>
                        <b>VAT: %5</b>
                    </p>
                </div>
                <div className="">
                    <div className="w-full max-w-sm min-w-[200px] relative mt-4">
                        <label className="block mb-2 text-sm text-slate-600">
                            Discount
                        </label>

                        <div class="relative">
                            <input
                                type="number"
                                className="w-1/2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                placeholder="Enter discount"
                                value={discountInput}
                                onChange={(e) => handleDiscount(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="py-2.5 px-5 me-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleSubmitInvoice}
                >
                    CONFIRM
                </button>
            </div>
        </div>
    );
};

export default BelliedTo;
