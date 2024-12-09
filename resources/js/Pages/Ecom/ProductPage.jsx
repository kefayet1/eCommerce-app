import Description from "@/Components/Description";
import Reviews from "@/Components/Reviews";
import { addProduct } from "@/features/cartProductSlice";
import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { usePage } from "@inertiajs/react";
import { Rating } from "@mui/material";
import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductPage = () => {
    const { props } = usePage();
    const [tabs, setTabs] = useState("description");
    const [carosalImage, setCarosalImage] = useState(
        "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    const dispatch = useDispatch();
    const totalRating =
        props.product_review.data.reduce(
            (acc, curVal) => acc + curVal.rating,
            0
        ) / props.product_review.data.length;
    const stars = [1, 2, 3, 4, 5];

    const handleAddProduct = (product) => {
        console.log(product);
        dispatch(addProduct(product));
    };

    return (
        <section className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <nav className="flex">
                    <ol role="list" className="flex items-center">
                        <li className="text-left">
                            <div className="-m-1">
                                <a
                                    href="#"
                                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                >
                                    {" "}
                                    Home{" "}
                                </a>
                            </div>
                        </li>

                        <li className="text-left">
                            <div className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                <div className="-m-1">
                                    <a
                                        href="#"
                                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                    >
                                        {" "}
                                        Products{" "}
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className="text-left">
                            <div className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                <div className="-m-1">
                                    <a
                                        href="#"
                                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                        aria-current="page"
                                    >
                                        {" "}
                                        Coffee{" "}
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:order-2 lg:ml-5">
                                <div className="max-w-xl overflow-hidden rounded-lg">
                                    <img
                                        className="h-full w-full max-w-full object-cover"
                                        src={carosalImage}
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div className="flex flex-row items-start lg:flex-col">
                                    <button
                                        type="button"
                                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                                    >
                                        <img
                                            className="h-full w-full object-cover"
                                            src="https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                            onClick={() =>
                                                setCarosalImage(
                                                    "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                )
                                            }
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                                    >
                                        <img
                                            className="h-full w-full object-cover"
                                            src="https://plus.unsplash.com/premium_photo-1727942421523-13ef5b5ebd78?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                            onClick={() =>
                                                setCarosalImage(
                                                    "https://plus.unsplash.com/premium_photo-1727942421523-13ef5b5ebd78?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                )
                                            }
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                                    >
                                        <img
                                            className="h-full w-full object-cover"
                                            src="https://plus.unsplash.com/premium_photo-1727942420443-c4b7fe7d87e4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                            onClick={() =>
                                                setCarosalImage(
                                                    "https://plus.unsplash.com/premium_photo-1727942420443-c4b7fe7d87e4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                )
                                            }
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                            {props.product.name}
                        </h1>

                        <div className="mt-5 flex items-center">
                            <div className="flex items-center">
                                {stars.map((star, index) => {
                                    if (index < Math.floor(totalRating)) {
                                        return (
                                            <FaStar color="orange" size={20} />
                                        );
                                    } else if (
                                        index === Math.floor(totalRating) &&
                                        totalRating % 1 >= 0.5
                                    ) {
                                        return (
                                            <FaStarHalfAlt
                                                color="orange"
                                                size={20}
                                            />
                                        );
                                    } else {
                                        return (
                                            <FaRegStar
                                                color="orange"
                                                size={20}
                                            />
                                        );
                                    }
                                })}
                            </div>
                            <p className="ml-2 text-sm font-medium text-gray-500">
                                {totalRating.toFixed(1)} Reviews
                            </p>
                        </div>

                        {Object.entries(props.product_variation).map(
                            (variant, index) => (
                                <>
                                    {/* {console.log(variant)} */}
                                    <h2 className="mt-8 text-base text-gray-900">
                                        {variant[0]}
                                    </h2>
                                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                        {variant[1].map((type) => (
                                            <>
                                                <label className="">
                                                    <input
                                                        type="radio"
                                                        name="type"
                                                        value="Powder"
                                                        className="peer sr-only"
                                                        checked
                                                    />
                                                    <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                                                        {type.variation_value}
                                                    </p>
                                                </label>
                                            </>
                                        ))}
                                    </div>
                                </>
                            )
                        )}

                        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div className="flex items-end">
                                <h1 className="text-3xl font-bold">
                                    {props.product.price}
                                </h1>
                                <span className="text-base">/month</span>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                onClick={() => handleAddProduct(props.product)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0 mr-3 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                Add to cart
                            </button>
                        </div>

                        <ul className="mt-8 space-y-2">
                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg
                                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        className=""
                                    ></path>
                                </svg>
                                Free shipping worldwide
                            </li>

                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg
                                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        className=""
                                    ></path>
                                </svg>
                                Cancel Anytime
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="border-b border-gray-300">
                            <nav className="flex gap-4">
                                <button
                                    title=""
                                    className={`${
                                        tabs === "description" &&
                                        "border-b-2 border-gray-900 text-gray-900 hover:text-gray-800 "
                                    } py-4 text-sm font-medium  text-gray-600 hover:border-gray-400 `}
                                    onClick={() => setTabs("description")}
                                >
                                    {" "}
                                    Description{" "}
                                </button>

                                <button
                                    title=""
                                    className={`${
                                        tabs === "reviews" &&
                                        "border-b-2 border-gray-900 text-gray-900 hover:text-gray-800 "
                                    } inline-flex items-center  py-4 text-sm font-medium text-gray-600`}
                                    onClick={() => setTabs("reviews")}
                                >
                                    Reviews
                                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                                        {" "}
                                        {props.product_review.total}{" "}
                                    </span>
                                </button>
                            </nav>
                        </div>

                        {tabs === "description" ? (
                            <Description des={props.product.short_des} />
                        ) : (
                            <Reviews totalReview={props.product_review.total} reviewPoint={totalRating.toFixed(1)}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

ProductPage.layout = (page) => <EcommerceLayout children={page} />;

export default ProductPage;
