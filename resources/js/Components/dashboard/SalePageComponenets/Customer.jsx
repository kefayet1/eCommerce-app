import { addCustomers } from "@/features/billSlice";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Customer = ({ MyClassName }) => {
    const { props } = usePage();
    const bills = useSelector((state) => state.bills);
    console.log(bills);
    const dispatch = useDispatch();

    const handleDispatchCustomers = (data) => {
        dispatch(addCustomers(data));
    };
    return (
        <div
            className={`p-5 md:shadow-2xl shadow-md mt-5 m-3 rounded-md ${MyClassName}`}
        >
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                        >
                                            customer
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                        >
                                            Remove
                                        </th>
                                    </tr>
                                </thead>
                                {props.customers.data.map((customer, index) => (
                                    <tbody key={index}>
                                        <tr class="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                {customer.name}
                                            </td>

                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <button
                                                    type="button"
                                                    class="inline-flex 
                                                     p-2 border-2 border-blue-500
                                                    items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                    onClick={() =>
                                                        handleDispatchCustomers(
                                                            customer
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
                        {props.customers.links.map((link) =>
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
    );
};

export default Customer;
