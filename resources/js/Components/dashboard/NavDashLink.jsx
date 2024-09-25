import { Link } from "@inertiajs/react";
import React from "react";

const NavDashLink = ({ url, name, children, to }) => {
    return (
        <Link
            className={`text-medium font-semibold mt-1 mx-2 px-5 py-3 rounded-md ${
                url === "/category"
                    ? "border-indigo-400 text-gray-900 focus:border-indigo-700"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-lightPurple focus:text-white focus:bg-lightPurple"
            }`}
            href={to}
        >
            <div className="flex">
                {children}
                <span className="ml-2">{name}</span>
            </div>
        </Link>
    );
};

export default NavDashLink;
