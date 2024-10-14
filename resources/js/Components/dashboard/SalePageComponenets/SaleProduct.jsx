import { addProduct } from "@/features/billSlice";
import { Link, usePage } from "@inertiajs/react";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SaleProduct = ({ MyClassName }) => {
    const { props } = usePage();
    const FormRef = useRef(null);
    const [showSaleProductFrom, setShowSaleProductFrom] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const bills = useSelector((state) => state.bills);
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        price: "",
        unit: 1,
    });

    const handleAddProduct = (product) => {
        console.log(product);
        setFormData({
            id: product.id,
            name: product.productName,
            price: product.price,
            unit: 0,
        });
        setShowSaleProductFrom(true);
    };

    const handleHideForm = (e) => {
        if (FormRef.current && !FormRef.current.contains(e.target)) {
            console.log("helle event");
            setShowSaleProductFrom(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleHideForm, true);

        () => {
            document.removeEventListener("click", handleHideForm, true);
        };
    }, []);

    const handleDispatchForm = (e) => {
        e.preventDefault();
        if (bills.length === 0) {
            setOpen(true);
            return;
        }
        dispatch(
            addProduct({
                ...formData,
                totalPrice: formData.price * formData.unit,
                price: formData.price,
            })
        );
        setShowSaleProductFrom(false);
    };

    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div
            className={`p-5 md:shadow-2xl shadow-lg mt-5 m-3 rounded-md ${MyClassName}`}
        >
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Please select a customer.
                </Alert>
            </Snackbar>
            {showSaleProductFrom && (
                <div className="w-full h-screen flex justify-center items-center bg-[#11111194] absolute top-0 left-0 z-50">
                    <div
                        className="rounded-lg bg-white p-8 shadow lg:col-span-3 lg:p-12 md:h-3/5  md:w-5/6 lg:w-8/12 lg:ml-80"
                        ref={FormRef}
                    >
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label for="email">Id</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="email"
                                        value={formData.id}
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label for="phone">Price</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="phone"
                                        value={formData.price}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" for="email">
                                        Qty
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Unit"
                                        type="number"
                                        id="email"
                                        value={formData.unit}
                                        onChange={(e) =>
                                            setFormData((prev) => {
                                                return {
                                                    ...prev,
                                                    unit: e.target.value,
                                                };
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="" for="email">
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Unit"
                                        type="text"
                                        id="email"
                                        value={formData.name}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={handleDispatchForm}
                                    className={`inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto`}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
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
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                        >
                                            unit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {props.products.data.map((product, index) => (
                                    <tbody key={index}>
                                        <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                {product.productName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                {product.unit}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <button
                                                    type="button"
                                                    className="inline-flex 
                                                     p-2 border-2 border-blue-500
                                                    items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                    onClick={() =>
                                                        handleAddProduct(
                                                            product
                                                        )
                                                    }
                                                >
                                                    Add
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className="py-10 text-center">
                            {props.products.links.map((link) =>
                                link.url ? (
                                    <Link
                                        className={`p-1 mx-1 ${
                                            link.active
                                                ? "font-bold text-blue-400 underline"
                                                : ""
                                        }`}
                                        key={link.label}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        className="cursor-not-allowed text-gray-300"
                                        key={link.label}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleProduct;
