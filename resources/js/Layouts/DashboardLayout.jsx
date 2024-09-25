import DashboardNavBar from "@/Components/dashboard/DashboardNavBar";
import LeftSideBar from "@/Components/dashboard/LeftSideBar";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import React, { useContext } from "react";

const DashboardLayout = ({ children }) => {
    const { showSidebar, setShowSideBar } = useContext(DashboardActionContext);

    return (
        <>
            <DashboardNavBar />
            <div className="h-screen">
                <div className="flex">
                    <div
                        className={`left pr-4  lg:w-[20%]  md:w-[35%] absolute top-0 hidden lg:block ${showSidebar ? "md:block" : ""}`}
                    >
                        <LeftSideBar />
                    </div>
                    <div className="middle w-full">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
