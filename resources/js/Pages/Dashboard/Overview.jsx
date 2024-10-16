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

const Overview = () => {
    const {props} = usePage();
    const { a, b, showForm, setShowForm } = useContext(DashboardActionContext);
    useEffect(() => {
        return setShowForm(false);
    }, []);
    console.log(props);
    return (
        <div>
            <div className="container flex gap-4">
                <div className="product flex w-60 justify-between p-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdOutlineProductionQuantityLimits size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.category}</h2>
                        <h3>Product</h3>
                    </div>
                </div>
                <div className="category flex w-60 justify-between p-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdCategory size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.category}</h2>
                        <h3>Category</h3>
                    </div>
                </div>
                <div className="totalSale flex w-60 justify-between p-5 shadow-lg rounded-md">
                    <div className="left">
                        <MdPointOfSale size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.total}</h2>
                        <h3>Total Sale</h3>
                    </div>
                </div>
                <div className="invoice flex w-60 justify-between p-5 shadow-lg rounded-md">
                    <div className="left">
                        <FaFileInvoice size={25} />
                    </div>
                    <div className="right">
                        <h2 className="font-bold text-2xl">{props.invoice}</h2>
                        <h3>Invoice</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
Overview.layout = (page) => <DashboardLayout children={page} />;
export default Overview;
