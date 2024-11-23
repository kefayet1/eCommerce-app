import UserDashboardNavBar from "@/Components/UserDashboardNavBar";
import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { CiLink } from "react-icons/ci";

const MyOrder = () => {
    const { props } = usePage();
    console.log(props.orders);
    return (
        <div className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto mt-5">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
                Orders
            </h2>
            <div className="flex flex-col lg:flex-row">
               <UserDashboardNavBar/>
                <div className="lg:ml-5 w-full">
                    <div className="mx-auto dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="dark:bg-gray-300">
                                    <tr className="text-left">
                                        <th className="p-3">Order #</th>
                                        <th className="p-3">Payment Method</th>
                                        <th className="p-3">Payed Currency</th>
                                        <th className="p-3">Order at</th>
                                        <th className="p-3 text-right">
                                            Amount
                                        </th>
                                        <th className="p-3">Delivery Status</th>
                                        <th className="p-3">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.orders.map((order) => (
                                        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                            <td className="p-3">
                                                <p>{order.id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{order.payment_method}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{order.currency}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{order.formatted_date}</p>
                                                <p className="dark:text-gray-600">
                                                    {order.formatted_day_name}
                                                </p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <p>{order.payable} TK</p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                    <span>Pending</span>
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                <Link href={`userOrder/${order.id}`}><CiLink size={20}/></Link>
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
    );
};

MyOrder.layout = (page) => <EcommerceLayout children={page} />;

export default MyOrder;
