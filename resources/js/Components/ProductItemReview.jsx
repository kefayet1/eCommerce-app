import { Avatar } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItemReview = ({ reviewData }) => {
    console.log(reviewData, "lksjdflksdjf");
    return (
        <div className="myReview py-4 px-4 ml-10 border-b border-x rounded-b-md">
            <div className="info flex items-center gap-2">
                <Avatar sx={{ width: 30, height: 30 }}>Y</Avatar>
                <h2>You</h2>
                <span className="text-xs text-gray-700">23/05/2024</span>
            </div>
            <div className="star flex gap-1 mt-2">
                {[...Array(reviewData.rating)].map((_, index) => {
                    // Assuming 'reviewData.rating' is a number
                    return <FaStar key={index} color="orange" />;
                })}
            </div>
            <div className="reviewText w-full my-3">
                <p className="text-sm text-gray-800">{reviewData.review}</p>
            </div>
            <div className="btn flex gap-4">
                <button className="font-bold text-sm text-gray-600">
                    Edit
                </button>
                <button className="font-bold text-sm text-gray-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductItemReview;
