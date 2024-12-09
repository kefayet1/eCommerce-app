import UserDashboardNavBar from "@/Components/UserDashboardNavBar";
import React from "react";

const MyProfile = () => {
    return (
        <div className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto mt-5 mb-10">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
                Profile
            </h2>
            <div className="flex flex-col lg:flex-row">
                <UserDashboardNavBar />
                <div className="lg:ml-5 w-full h-full">
                    <div className="">
                        <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:mt-8">
                            {/* {props.wishlist.map((wish, index) => (
                                <WishlistCardItem key={index} data={wish}/>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
