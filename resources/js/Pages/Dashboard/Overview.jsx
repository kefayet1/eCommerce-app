import OverviewCategoryItem from "@/Components/OverviewCategoryItem";
import OverviewOrderItems from "@/Components/OverviewOrderItems";
import OverviewSellingProdItem from "@/Components/OverviewSellingProdItem";
import SalesLineChart from "@/Components/SalesLineChart";
import SalesPieChart from "@/Components/SalesPieChart";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import React, { useContext, useEffect } from "react";
import { FaFileInvoice } from "react-icons/fa";
import {
    MdCategory,
    MdOutlineProductionQuantityLimits,
    MdPointOfSale,
} from "react-icons/md";

const Overview = ({ data }) => {
    const { props } = usePage();
    const { a, b, showForm, setShowForm } = useContext(DashboardActionContext);
    useEffect(() => {
        return setShowForm(false);
    }, []);
    console.log(props.totalSaleData);
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between mb-3">
                <div className="product flex  justify-between py-10 px-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdOutlineProductionQuantityLimits size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.product}</h2>
                        <h3>Product</h3>
                    </div>
                </div>
                <div className="category flex  justify-between py-10 px-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdCategory size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.category}</h2>
                        <h3>Category</h3>
                    </div>
                </div>
                <div className="totalSale flex  justify-between py-10 px-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdPointOfSale size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">
                            {props.totalSaleData.totalSale}
                        </h2>
                        <h3>Total Sale</h3>
                    </div>
                </div>
                <div className="invoice flex justify-between py-10 px-5 shadow-lg rounded-md">
                    <div className="left">
                        <FaFileInvoice size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">
                            {props.totalSaleData.totalRevenue}
                        </h2>
                        <h3>Total Revenue</h3>
                    </div>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-6 gap-10 pt-6 lg:mb-4 mb-5 ">
                <div className="w-full p-4 shadow-lg blue-orange-400 rounded-md">
                    <SalesLineChart />
                </div>
                <div className="w-full lg:w-2/5 p-4 shadow-lg blue-orange-400 rounded-md">
                    <SalesPieChart />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-6 pt-6 mb-8">
                <div className="w-full p-4 shadow-lg blue-orange-400 rounded-md">
                    <div className="mb-3">
                        <h2 className="font-medium text-xl">Top Category</h2>
                    </div>
                    <div class="flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 ">
                                        <thead class="bg-gray-50 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <div class="flex items-center gap-x-3">
                                                        <button class="flex items-center gap-x-2">
                                                            <span>
                                                                Category Name
                                                            </span>
                                                        </button>
                                                    </div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                                >
                                                    Sold
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 ">
                                            {props.topCategorySale.map(
                                                (category, index) => (
                                                    <OverviewCategoryItem
                                                        key={index}
                                                        data={category}
                                                    />
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 shadow-lg blue-orange-400 rounded-md">
                    <div class="flex flex-col">
                    <div className="mb-3">
                        <h2 className="font-medium text-xl">Top Selling Product</h2>
                    </div>
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 ">
                                        <thead class="bg-gray-50 ">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    <div class="flex items-center gap-x-3">
                                                        <button class="flex items-center gap-x-2">
                                                            <span>
                                                                Product Name
                                                            </span>
                                                        </button>
                                                    </div>
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                                >
                                                    Sold
                                                </th>

                                                <th
                                                    scope="col"
                                                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                                >
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 ">
                                            {props.topSellingProd.map(
                                                (prod, index) => (
                                                    <OverviewSellingProdItem
                                                        data={prod}
                                                        key={index}
                                                    />
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 shadow-lg blue-orange-400 rounded-md">
            <div className="mb-3">
                        <h2 className="font-medium text-xl">Latest order</h2>
                    </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    User name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Delivery_status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payment_status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.orders.map((order, index) => (
                                <OverviewOrderItems data={order} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
Overview.layout = (page) => <DashboardLayout children={page} />;
export default Overview;
