import React from "react";
import NavLink from "../NavLink";
import { PiChartPie } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import {
    FaAmericanSignLanguageInterpreting,
    FaFileInvoice,
} from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";

import {
    IoBagHandleOutline,
    IoBagHandleSharp,
    IoPeopleOutline,
    IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineAccountCircle, MdOutlineCategory } from "react-icons/md";
import { Link, usePage } from "@inertiajs/react";
import NavDashLink from "./NavDashLink";

const LeftSideBar = () => {
    const { url } = usePage();
    console.log(url);
    return (
        <div className="bg-darkies-Blue h-screen pt-3">
            <div className="flex flex-col ">
                <NavDashLink name={"Overview"} url={url} to={"/dashboard"}>
                    <PiChartPie size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Category"} url={url} to={"/categories"}>
                    <MdOutlineCategory size={"20px"} />
                </NavDashLink>
                <NavDashLink
                    name={"Sub-Category"}
                    url={url}
                    to={"/subCategory"}
                >
                    <TbCategoryPlus size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Product"} url={url} to={"/products"}>
                    <FaAmericanSignLanguageInterpreting size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Sale Page"} url={url} to={"/salePage"}>
                    <IoBagHandleSharp size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Invoice"} url={url} to={"/invoice"}>
                    <FaFileInvoice size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Customers"} url={url} to={"/customer"}>
                    <IoPeopleOutline size={"20px"} />
                </NavDashLink>
            </div>
        </div>
    );
};

export default LeftSideBar;
