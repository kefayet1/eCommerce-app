import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { useForm } from "@inertiajs/react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
    const cartProduct = useSelector((state) => state.cartProduct);
    const { data, setData, post, processing, errors } = useForm({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        firstName: "",
        city: "",
        region: "",
        country: "",
        zipCode: "",
        phone: "",
        product: cartProduct,
        paymentMethod: "",
    });

    console.log(cartProduct);

    const CityDefaultProps = {
        options: [{ title: "Chittagong" }, { title: "Dhaka" }],
        getOptionLabel: (option) => option.title,
    };

    const RegionDefaultProps = {
        options: [{ title: "chattagram" }, { title: "Feni" }],
        getOptionLabel: (option) => option.title,
    };

    const CountryDefaultProps = {
        options: [{ title: "Bangladesh" }, { title: "India" }],
        getOptionLabel: (option) => option.title,
    };

    console.log(data);

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        post("/createOrder");
    };
    return (
        <div className="overflow-y-hidden">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                                Check out
                            </p>
                        </div>
                        <div className="mt-2">
                            <a
                                href="javascript:void(0)"
                                className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
                            >
                                Back to my bag
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">
                                Shipping Details
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                type="text"
                                placeholder="First Name"
                                value={data.firstName}
                                onChange={(e) =>
                                    setData("firstName", e.target.value)
                                }
                            />
                            <input
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                type="text"
                                placeholder="Last Name"
                                value={data.lastName}
                                onChange={(e) =>
                                    setData("lastName", e.target.value)
                                }
                            />
                            <input
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                type="text"
                                placeholder="Address"
                                value={data.address1}
                                onChange={(e) =>
                                    setData("address1", e.target.value)
                                }
                            />
                            <input
                                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                                type="text"
                                placeholder="Address (line 02)"
                                value={data.address2}
                                onChange={(e) =>
                                    setData("address2", e.target.value)
                                }
                            />
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <Stack spacing={1} sx={{ width: 300 }}>
                                        <Autocomplete
                                            {...CityDefaultProps}
                                            onChange={(e, value) =>
                                                setData("city", value.title)
                                            }
                                            id="disable-close-on-select"
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="City"
                                                    variant="standard"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </div>
                                <div className="relative w-full">
                                    <Stack spacing={1} sx={{ width: 300 }}>
                                        <Autocomplete
                                            {...RegionDefaultProps}
                                            onChange={(e, value) =>
                                                setData("region", value.title)
                                            }
                                            id="disable-close-on-select"
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Region"
                                                    variant="standard"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <Stack spacing={1} sx={{ width: 300 }}>
                                        <Autocomplete
                                            {...CountryDefaultProps}
                                            id="disable-close-on-select"
                                            onChange={(e, value) =>
                                                setData("country", value.title)
                                            }
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Country"
                                                    variant="standard"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </div>
                                <div className="w-full">
                                    <input
                                        className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                                        type="text"
                                        placeholder="Zip Code"
                                        value={data.zipCode}
                                        onChange={(e) =>
                                            setData("zipCode", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <input
                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                                type="text"
                                placeholder="Phone Number"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <button
                            className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
                            onClick={handleSubmitOrder}
                        >
                            Proceed to payment
                        </button>
                        <div className="mt-4 flex justify-start items-center w-full">
                            <a
                                href="javascript:void(0)"
                                className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
                            >
                                Back to my bag
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                                    Order Summary
                                </h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">
                                        Total items
                                    </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">
                                        20
                                    </p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">
                                        Total Charges
                                    </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">
                                        $2790
                                    </p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">
                                        Shipping charges
                                    </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">
                                        $90
                                    </p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">
                                        Sub total{" "}
                                    </p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">
                                        $3520
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center mt-32 border-b pb-8">
                                <p className="text-xl font-semibold leading-4 text-gray-800">
                                    Estimated Total{" "}
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">
                                    {cartProduct.reduce(
                                        (acc, prevProd) =>
                                            acc + prevProd.totalPrice,
                                        0
                                    )}
                                </p>
                            </div>
                            <div className="w-full flex justify-start items-start bg-gray-50 pt-8">
                                <div className="w-full flex flex-col gap-4">
                                    <div
                                        className={`w-full flex justify-between items-center  ${
                                            data.paymentMethod === "paypal"
                                                ? "bg-purple-200 shadow-lg shadow-purple-100"
                                                : "bg-white"
                                        } px-6 py-3 rounded-md`}
                                        onClick={() =>
                                            setData("paymentMethod", "paypal")
                                        }
                                    >
                                        <div className="img">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/640px-PayPal_Logo_Icon_2014.svg.png"
                                                alt=""
                                                className="w-10 h-10"
                                            />
                                        </div>
                                        <div className="name">
                                            <h2>Pay With Paypal</h2>
                                        </div>
                                        <div className="radio">
                                            <input
                                                id="radio-vertical-group-1"
                                                type="radio"
                                                name="radio-vertical-group"
                                                class="checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                                checked={
                                                    data.paymentMethod ===
                                                    "paypal"
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className={`w-full flex justify-between items-center  ${
                                            data.paymentMethod === "stripe"
                                                ? "bg-purple-200 shadow-lg shadow-purple-100"
                                                : "bg-white"
                                        } px-6 py-3 rounded-md`}
                                        onClick={() =>
                                            setData("paymentMethod", "stripe")
                                        }
                                    >
                                        <div className="img">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                                                alt=""
                                                className="w-10 h-10"
                                            />
                                        </div>
                                        <div className="name">
                                            <h2>Pay With Stripe</h2>
                                        </div>
                                        <div className="radio">
                                            <input
                                                id="radio-vertical-group-1"
                                                type="radio"
                                                name="radio-vertical-group"
                                                class="checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                                checked={
                                                    data.paymentMethod ===
                                                    "stripe"
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full flex justify-between items-center  ${
                                            data.paymentMethod === "sslCommerz"
                                                ? "bg-purple-200 shadow-lg shadow-purple-100"
                                                : "bg-white"
                                        } px-6 py-3 rounded-md`}
                                        onClick={() =>
                                            setData("paymentMethod", "sslCommerz")
                                        }>
                                        <div className="img w-96 -ml-8">
                                            <img
                                                src="https://signup.sslcommerz.com/assets/global/img/paywith_web_versionW.png"
                                                alt=""
                                                className="h-10"
                                            />
                                        </div>

                                        <div className="radio lg:pl-2">
                                            <input
                                                id="radio-vertical-group-1"
                                                type="radio"
                                                name="radio-vertical-group"
                                                class="checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                                checked={
                                                    data.paymentMethod ===
                                                    "sslCommerz"
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Checkout.layout = (page) => <EcommerceLayout children={page} />;
export default Checkout;
