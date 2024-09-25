import DashboardNavBar from "@/Components/dashboard/DashboardNavBar";
import LeftSideBar from "@/Components/dashboard/LeftSideBar";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import React, { useContext, useEffect, useRef } from "react";

const DashboardLayout = ({ children }) => {
    const SideBarRef = useRef(null);
    const { showSidebar, setShowSideBar } = useContext(DashboardActionContext);

    const handleSidebar = (e) => {
        if (SideBarRef.current && !SideBarRef.current.contains(e.target)) {
            console.log("helle event");
            setShowSideBar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleSidebar, true);

        () => document.removeEventListener("click", handleSidebar, true);
    }, []);

    return (
        <>
            <DashboardNavBar />
            <div className={`h-screen ${showSidebar ? "bg-slate-400" : ""}`}>
                <div className="flex">
                    <div
                        className={`left pr-4  lg:w-[20%]  md:w-[35%] absolute top-0 hidden lg:block ${
                            showSidebar ? "md:block " : ""
                        }`}
                        ref={SideBarRef}
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
