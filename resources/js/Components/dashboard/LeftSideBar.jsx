import React from "react";
import NavLink from "../NavLink";
import { PiChartPie } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

const LeftSideBar = () => {
    
    return (
        <div className="bg-darkies-Blue h-[1000px] pt-3">
            <div className="flex flex-col ">
                <NavLink className="text-medium font-semibold mx-2 px-5 py-3 rounded-md">
                    <div className="flex">
                        <PiChartPie size={"20px"} />
                        <span className="ml-2">Overview</span>
                    </div>
                </NavLink>
                <NavLink className="text-medium font-semibold mx-2 px-5 py-3 rounded-md">
                    <div className="flex">
                        <BsFillPeopleFill size={"20px"} />
                        <span className="ml-2">Customers</span>
                    </div>
                </NavLink>
                <NavLink className="text-medium font-semibold mx-2 px-5 py-3 rounded-md">
                    <div className="flex">
                        <FaAmericanSignLanguageInterpreting size={"20px"} />
                        <span className="ml-2">Integrations</span>
                    </div>
                </NavLink>
                <NavLink className="text-medium font-semibold mx-2 px-5 py-3 rounded-md">
                    <div className="flex">
                        <IoSettingsOutline size={"20px"} />
                        <span className="ml-2">Integrations</span>
                    </div>
                </NavLink>
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
