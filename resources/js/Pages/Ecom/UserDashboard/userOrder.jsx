import EcommerceLayout from "@/Layouts/EcommerceLayout";
import Dashboard from "@/Pages/___";
import { usePage } from "@inertiajs/react";
import React from "react";

const userOrder = () => {
    const { props } = usePage();
    console.log(props);
    return (
        <section class="py-24 relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 class="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-11">
                    Your Order Confirmed
                </h2>
                <h6 class="font-medium text-xl leading-8 text-black mb-3">
                    Hello, Christine
                </h6>
                <p class="font-normal text-lg leading-8 text-gray-500 mb-11">
                    Your order has been completed and be delivery in only two
                    days .
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-6 border-y border-gray-100 mb-6">
                    <div class="box group">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Order At
                        </p>
                        <h6 class="font-semibold font-manrope text-2xl leading-9 text-black">
                            {props.order.created_at.split(" ")[0]}
                        </h6>
                    </div>
                    <div class="box group">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Order
                        </p>
                        <h6 class="font-semibold font-manrope text-2xl leading-9 text-black">
                            #{props.order.id}
                        </h6>
                    </div>
                    <div class="box group">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Payment Method
                        </p>
                        <h6 class="font-semibold font-manrope text-2xl leading-9 text-black">
                            {props.order.payment_method}
                        </h6>
                    </div>
                    <div class="box group">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Payment Status
                        </p>
                        <h6 class="font-semibold font-manrope text-2xl leading-9 text-purple-600">
                            {props.order.payment_status}
                        </h6>
                    </div>
                    <div class="box group">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Delivery Status
                        </p>
                        <h6 class="font-semibold font-manrope text-2xl leading-9 text-blue-600">
                            {props.order.delivery_status}
                        </h6>
                    </div>
                    <div className="w-full">
                        <p class="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Delivery Location
                        </p>
                        <p class="font-semibold font-manrope text-sm  text-black">
                            {props.order.ship_details}
                        </p>
                    </div>
                </div>

                {props.order_items.map((item) => (
                    <div class="grid grid-cols-7 w-full py-6 border-b border-gray-100">
                        <div class="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                            <img
                                src="https://pagedone.io/asset/uploads/1701167697.png"
                                alt="Skin Tone Serum image"
                                class="w-full rounded-xl object-cover"
                            />
                        </div>
                        <div class="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                            <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                                <div class="">
                                    <h5 class="font-manrope font-semibold text-2xl leading-9 text-black mb-6">
                                        {item.name}
                                    </h5>
                                    <p class="font-normal text-xl leading-8 text-gray-500">
                                        Quantity :{" "}
                                        <span class="text-black font-semibold">
                                            {item.qty}
                                        </span>
                                    </p>
                                </div>

                                <h5 class="font-manrope font-semibold text-3xl leading-10 text-black sm:text-right mt-3">
                                    {item.price}
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}

                <div class="flex items-center justify-center sm:justify-end w-full my-6">
                    <div class=" w-full">
                        <div class="flex items-center justify-between mb-6">
                            <p class="font-normal text-xl leading-8 text-gray-500">
                                Subtotal
                            </p>
                            <p class="font-semibold text-xl leading-8 text-gray-900">
                                {props.order.total}
                            </p>
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <p class="font-normal text-xl leading-8 text-gray-500">
                                Shipping Charge
                            </p>
                            <p class="font-semibold text-xl leading-8 text-gray-900">
                                00
                            </p>
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <p class="font-normal text-xl leading-8 text-gray-500">
                                Taxes
                            </p>
                            <p class="font-semibold text-xl leading-8 text-gray-900">
                                {props.order.vat}
                            </p>
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <p class="font-normal text-xl leading-8 text-gray-500">
                                Discount
                            </p>
                            <p class="font-semibold text-xl leading-8 text-gray-900">
                                00
                            </p>
                        </div>
                        <div class="flex items-center justify-between py-6 border-y border-gray-100">
                            <p class="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                                Total
                            </p>
                            <p class="font-manrope font-bold text-2xl leading-9 text-indigo-600">
                                {props.order.payable}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="data ">
                    <p class="font-normal text-lg leading-8 text-gray-500 mb-11">
                        We'll be sending a shipping confirmation email when the
                        items shipped successfully.
                    </p>
                    <h6 class="font-manrope font-bold text-2xl leading-9 text-black mb-3">
                        Thank you for shopping with us!
                    </h6>
                    <p class="font-medium text-xl leading-8 text-indigo-600">
                        Team Pagedone
                    </p>
                </div>
            </div>
        </section>
    );
};

userOrder.layout = (page) => <EcommerceLayout children={page} />;
export default userOrder;
