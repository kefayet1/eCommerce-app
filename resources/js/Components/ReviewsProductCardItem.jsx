import React from "react";
import { useState } from "react";
import AddReviewModal from "./AddReviewModal";
import { FaStar } from "react-icons/fa";
import { Avatar, Fade, Snackbar } from "@mui/material";
import ProductItemReview from "./ProductItemReview";
const ReviewsProductCardItem = ({ data, reviewData }) => {
    const [open, setOpen] = useState(false);
    const [toastMes, setToastMes] = useState({
        open: false,
        Transition: Fade,
        message: "",
    });

    const handleClose = () => {
        setOpen(!open);
    };

    console.log(reviewData.delivery_status, "heljsldjf");

    const handleDeliveryNotCom = () => {
        setToastMes({
            open: true,
            Transition: Fade,
            message: "You can't add review before order complete !",
        });
    };

    const handleAlreadyReview = () => {
        setToastMes({
            open: true,
            Transition: Fade,
            message: "You can only add one review for one product !",
        });
    };

    const handleToastClose = () => {
        setToastMes({
            open: false,
            Transition: Fade,
            message: "",
        });
    };
    return (
        <div className="mb-4">
            <Snackbar
                open={toastMes.open}
                onClose={handleToastClose}
                TransitionComponent={toastMes.Transition}
                message={toastMes.message}
                key={toastMes.Transition.name}
                autoHideDuration={3000}
                style={toastMes.style}
            />
            <div
                // key={product.id}
                className="border border-gray-200 bg-white p-4 shadow-sm  md:p-6 h-full"
            >
                <AddReviewModal
                    open={open}
                    setOpen={setOpen}
                    handleClose={handleClose}
                    productId={data.productId}
                />
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                        <img
                            className="h-20 w-20 dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                            alt="imac image"
                        />
                        <img
                            className="hidden h-20 w-20 dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                            alt="imac image"
                        />
                    </a>

                    <label for="counter-input" className="sr-only">
                        Choose quantity:
                    </label>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                            {/* <h2>Unit </h2>
                                    <p>2</p> */}
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900">
                                {data.sale_price}tk
                            </p>
                        </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline"
                        >
                            {data.name}
                        </a>

                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-sm">quantity : </h2>
                            <p>{data.qty}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="inline-flex items-center text-sm font-semibold text-red-500 hover:text-gray-900 hover:underline"
                            >
                                Return Product
                            </button>

                            <button
                                type="button"
                                className={`inline-flex items-center text-sm font-medium ${
                                    reviewData.delivery_status ===
                                        "delivered" && !data.productReviewId
                                        ? " text-amber-500 border border-amber-400"
                                        : "text-gray-500 border border-gray-400"
                                } px-4 py-2 rounded-full`}
                                onClick={
                                    reviewData.delivery_status === "delivered"
                                        ? data.productReviewId === null
                                            ? handleClose
                                            : handleAlreadyReview
                                        : handleDeliveryNotCom
                                }
                            >
                                Add reveiw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {data.product_review.productReviewId && (
                <ProductItemReview reviewData={data.product_review} />
            )}
        </div>
    );
};

export default ReviewsProductCardItem;
