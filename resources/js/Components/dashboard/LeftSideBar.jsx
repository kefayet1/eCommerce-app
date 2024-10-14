import React from "react";
import NavLink from "../NavLink";
import { PiChartPie } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import {
    IoBagHandleOutline,
    IoBagHandleSharp,
    IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
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
                    <BsFillPeopleFill size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Product"} url={url} to={"/products"}>
                    <FaAmericanSignLanguageInterpreting size={"20px"} />
                </NavDashLink>
                <NavDashLink name={"Sale Page"} url={url} to={"/salePage"}>
                    <IoBagHandleSharp size={"20px"} />
                </NavDashLink>
                <NavLink className="text-medium font-semibold mx-2 px-5 py-3 rounded-md">
                    <div className="flex">
                        <MdOutlineAccountCircle size={"20px"} />
                        <span className="ml-2">Account</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default LeftSideBar;
