import { router } from "@inertiajs/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const WishlistCardItem = ({ data }) => {
    const handleDeleteWishListItem = (id) => {
        router.post("/deleteWishListitem", { wishlistId: id });
    };
    return (
        <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <a href="#" className="overflow-hidden rounded">
                <img
                    className="mx-auto hidden h-44 w-44 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    alt="imac image"
                />
            </a>
            <div>
                <a
                    href="#"
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
                >
                    {data.name}
                </a>
                <p className="mt-2 text-base font-normal text-gray-500">
                    {data.short_des.substr(0, 200)}
                </p>
            </div>
            <div>
                {/* <p className="text-lg font-bold text-gray-900 ">
                    <span className="line-through"> $399,99 </span>
                </p> */}
                <p className="text-lg font-bold leading-tight text-red-600 ">
                    {data.price}
                </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-2.5">
                <button
                    data-tooltip-target="favourites-tooltip-1"
                    type="button"
                    onClick={() =>
                        handleDeleteWishListItem(data.wishListItemId)
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white p-2.5 text-red-800 text-sm font-medium  hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                >
                    <MdDeleteForever size={18} /> Remove
                </button>
                <div
                    id="favourites-tooltip-1"
                    role="tooltip"
                    className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
                >
                    Add to favourites
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                >
                    <svg
                        className="-ms-2 me-2 h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default WishlistCardItem;
