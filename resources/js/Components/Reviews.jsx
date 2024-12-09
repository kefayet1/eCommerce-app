import { usePage } from "@inertiajs/react";
import { Avatar } from "@mui/material";
import { FaStar } from "react-icons/fa";

const Reviews = ({totalReview, reviewPoint}) => {
    const { props } = usePage();
    // console.log(props, "lksjflkdsj");
    return (
        <div class="mt-8 flow-root ">
            <div class="lg:px-10  min-h-screen shadow-lg">
                <h1 class="py-7 px-5 text-xl font-extrabold">Reviews</h1>
                <div className="w-full flex gap-6 items-center px-5 mb-6">
                    <div className="review w-3/6 border-r flex flex-col items-center">
                        <h2 className="font-extrabold text-6xl">{reviewPoint}</h2>
                        <p className="text-xs text-gray-500 mt-2">Total: ({totalReview})</p>
                    </div>
                    <div className="reviewProgressBar w-full flex flex-col">
                        {props.reviewProgressData.map((progItem, index) => (
                            <div key={index} className="w-full flex items-center gap-1">
                                <div className="prograssBarItem w-full flex gap-1">
                                    <div className="starNum flex items-center gap-1">
                                        <FaStar color="orange" />
                                        <span>{progItem.rating}</span>
                                    </div>
                                    <div className="w-full translate-y-2">
                                        <div className=" w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                            <div
                                                className="bg-orange-600 h-2.5 rounded-full dark:bg-orange-500"
                                                style={{
                                                    width: `${progItem.percentage}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="starNum flex items-center gap-1">
                                        <span>{progItem.count}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="flex flex-col gap-2 p-5  text-white">
                    {props.product_review.data.map((review, index) => (
                        <div
                            key={index}
                            class="flex flex-col border rounded-md gap-4 bg-white text-black p-4"
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
