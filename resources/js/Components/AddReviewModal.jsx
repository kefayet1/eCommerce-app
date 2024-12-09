import React from "react";
import { Box, Button, Modal, TextareaAutosize } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

const AddReviewModal = ({ open, setOpen, handleClose, productId }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        star: 0,
        reviewText: "",
        productId: productId,
    });

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: 1,
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    console.log(rating);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        post("/addReview", {
            onSuccess: () => {
                setData({
                    star: 0,
                    reviewText: "",
                    productId: productId,
                });
                setRating(null);
                handleClose();
            },
        });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 500 }}>
                <div>
                    <div className="start mb-4">
                        <h2 className="font-bold text-sm">Give Start</h2>
                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;

                                return (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            className="hidden"
                                            value={ratingValue}
                                            onClick={() => {
                                                setRating(ratingValue);
                                                setData("star", ratingValue);
                                            }}
                                        />
                                        <FaStar
                                            color={
                                                ratingValue <= (hover || rating)
                                                    ? "orange"
                                                    : "gray"
                                            }
                                            size={25}
                                            // onMouseEnter={() =>
                                            //     setHover(ratingValue)
                                            // }
                                            // onMouseOut={() => setHover(null)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                    <div className="writeReview">
                        <h2 className="font-bold text-sm mb-2">
                            Write your reivew
                        </h2>
                        <textarea
                            name=""
                            id=""
                            className="w-full border border-gray-300 rounded-md active:border-1 active:border-gray-500"
                            value={data.reviewText}
                            onChange={(e) =>
                                setData("reviewText", e.target.value)
                            }
                        ></textarea>
                    </div>
                </div>
                <button
                    onClick={handleSubmitReview}
                    className={`py-2 px-4 bg-blue-800 hover:bg-blue-600 text-white rounded-md ${
                        processing && "bg-gray-400"
                    }`}
                >
                    Submit
                </button>
            </Box>
        </Modal>
    );
};

export default AddReviewModal;
