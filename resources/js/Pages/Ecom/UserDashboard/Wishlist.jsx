import UserDashboardNavBar from "@/Components/UserDashboardNavBar";
import EcommerceLayout from "@/Layouts/EcommerceLayout";
import React from "react";

const Wishlist = () => {
    return (
        <div className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto mt-5">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
                Wishlist
            </h2>
            <div className="flex flex-col lg:flex-row">
                <UserDashboardNavBar />
                <div className="lg:ml-5 w-full">
                    
                </div>
            </div>
        </div>
    );
};

Wishlist.layout = (page) => <EcommerceLayout children={page}/>
export default Wishlist;
