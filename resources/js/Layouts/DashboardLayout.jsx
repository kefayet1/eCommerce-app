import DashboardNavBar from "@/Components/dashboard/DashboardNavBar";
import LeftSideBar from "@/Components/dashboard/LeftSideBar";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import { usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const DashboardLayout = ({ children, pageName }) => {
    const SideBarRef = useRef(null);
    const { url } = usePage();
    const pathname = new URL(url, window.location.origin).pathname;

    const { showSidebar, setShowSideBar, showForm, setShowForm } = useContext(
        DashboardActionContext
    );

    const handleSidebar = (e) => {
        if (SideBarRef.current && !SideBarRef.current.contains(e.target)) {
            console.log("helle event");
            setShowSideBar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleSidebar, true);

        () => {
            document.removeEventListener("click", handleSidebar, true);
        };
    }, []);

    return (
        <>
            <DashboardNavBar />

            <div className={`h-screen ${showSidebar ? "bg-slate-400" : ""}`}>
                <div className="flex h-[100%]">
                    <div
                        className={`left pr-4  lg:w-[20%]  md:w-[35%]  absolute top-0 hidden lg:block z-50 ${
                            showSidebar ? "md:block " : ""
                        }`}
                        ref={SideBarRef}
                    >
                        <LeftSideBar />
                    </div>
                    <div
                        className={`left pr-4  lg:w-[24%]  md:w-[35%] hidden lg:block `}
                    ></div>
                    <div className="middle w-full bg-slate-100">
                        <div className="w-[94%] lg:w-[96%] lg:ml-[1rem] ml-[1.5rem]">
                            <div className="mt-4">
                                <div className="bg-white px-4 py-2 rounded-md shadow-lg">
                                    <div className="mt-4 flex justify-between items-end">
                                        <div className="">
                                            <h2 className="text-2xl text-[#180161]">
                                                {pageName}
                                            </h2>
                                        </div>
                                        <div className="">
                                            {pathname !== "/invoice" &&
                                                pathname !== "/salePage" &&
                                                pathname !== "/dashboard" && 
                                                !pathname.includes("invoiceModal") &&(
                                                    <button
                                                        onClick={() =>
                                                            setShowForm(
                                                                !showForm
                                                            )
                                                        }
                                                        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                                                    >
                                                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                                        <span className="relative z-20 flex items-center text-sm">
                                                            <FaPlus
                                                                size={12}
                                                                className="mr-1"
                                                            />
                                                            Create
                                                        </span>
                                                    </button>
                                                )}
                                        </div>
                                    </div>
                                    <main>{children}</main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
