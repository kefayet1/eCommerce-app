import { usePage } from "@inertiajs/react";
import { Avatar } from "@mui/material";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    const { props } = usePage();
    console.log(props.product_review);
    return (
        <div class="mt-8 flow-root ">
            <div class=" min-h-screen ">
                <div class="px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white">
                    <h1 class="py-5 text-lg">Reviews</h1>

                    {props.product_review.data.map((review, index) => (
                        <div
                            key={index}
                            class="flex flex-col gap-4 bg-gray-700 p-4"
                        >
                            {/* <!-- Profile and Rating --> */}
                            <div class="flex justify justify-between">
                                <div class="flex gap-2">
                                    <Avatar>{review.userName[0]}</Avatar>

                                    <span>{review.userName}</span>
                                </div>
                                <div class="flex p-1 gap-1 text-orange-300">
                                    {[...Array(review.rating)].map(
                                        (val, index) => {
                                            return <FaStar key={index} />;
                                        }
                                    )}
                                </div>
                            </div>

                            <div>{review.review}</div>

                            <div class="flex justify-between">
                                <span>Feb 13, 2021</span>
                                <button class="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                                    <ion-icon name="share-outline"></ion-icon>{" "}
                                    Share
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* <!-- Item Container --> */}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
