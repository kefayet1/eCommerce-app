import { Link, usePage } from "@inertiajs/react";
import React from "react";

const UserDashboardNavBar = () => {
    const { url } = usePage();
    return (
        <div className="lg:w-2/12 h-full p-2 lg:mb-0 mb-4 bg-white shadow-md shadow-purple-300 rounded-sm">
            <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 ">
                <Link
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 hover:bg-slate-500"
                    href="/examples/forms ${url === ""}`}
                >
                    Profile
                </Link>
                <Link
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 hover:bg-slate-50"
                        href="/examples/forms ${
                            url === "/myOrder" && "bg-black text-white"
                        }`}
                    href="/myOrder"
                >
                    Order
                </Link>
                <Link
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 hover:bg-slate-50"
                    href="/reviews"
                >
                    Review
                </Link>
                <Link
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 hover:bg-slate-50"
                        href="/examples/forms ${
                            url === "/wishlist" && "bg-black text-white"
                        }`}
                    href="/wishlist"
                >
                    Wishlist
                </Link>
            </nav>
        </div>
    );
};

export default UserDashboardNavBar;
