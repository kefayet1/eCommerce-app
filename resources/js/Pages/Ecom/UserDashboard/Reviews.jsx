import ReviewsProductCardItem from "@/Components/ReviewsProductCardItem";
import UserDashboardNavBar from "@/Components/UserDashboardNavBar";
import EcommerceLayout from "@/Layouts/EcommerceLayout";

const Reviews = ({ reviewOrder }) => {
    // console.log(reviewOrder, "hello");
    return (
        <div className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto mt-5 mb-10">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
                Reviews
            </h2>
            <div className="flex flex-col lg:flex-row">
                <UserDashboardNavBar />
                <div className="lg:ml-5 w-full">
                    {reviewOrder.map((order, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 mb-5">
                            <div
                                
                                className="border-t border-x rounded-t-md border-gray-200 bg-white flex gap-8 p-3 shadow-sm  md:p-4"
                            >
                                <div className="">
                                    <h2 className="text-sm font-bold mb-1">
                                        Order Id
                                    </h2>
                                    <p className="text-neutral-500">
                                        #{order.orderID}
                                    </p>
                                </div>

                                <div className="">
                                    <h2 className="text-sm font-bold mb-1">
                                        Delivery Status
                                    </h2>
                                    {order.delivery_status === "pending" ? (
                                        <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                                            <svg
                                                width="5"
                                                height="6"
                                                viewBox="0 0 5 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="2.5"
                                                    cy="3"
                                                    r="2.5"
                                                    fill="#D97706"
                                                ></circle>
                                            </svg>
                                            <span className="font-medium text-xs text-amber-600 ">
                                                Pending
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="py-1.5 px-2.5 bg-purple-50 rounded-full flex items-center justify-center w-20 gap-1">
                                            <svg
                                                width="5"
                                                height="6"
                                                viewBox="0 0 5 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="2.5"
                                                    cy="3"
                                                    r="2.5"
                                                    fill="#D97706"
                                                ></circle>
                                            </svg>
                                            <span className="font-medium text-xs text-purple-600 ">
                                                Completed
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="">
                                    <h2 className="text-sm font-bold mb-1">
                                        Amount
                                    </h2>
                                    <p className="text-neutral-500">
                                        {order.payable}tk
                                    </p>
                                </div>

                                <div className="">
                                    <h2 className="text-sm font-bold mb-1">
                                        Order at
                                    </h2>
                                    <p className="text-neutral-500">
                                        {order.created_at
                                            .split(" ")[0]
                                            .split("-")
                                            .reverse()
                                            .join("-")}
                                    </p>
                                </div>
                            </div>
                            {order.order_items.map((orderItem, index) => (
                                <ReviewsProductCardItem
                                    data={orderItem}
                                    key={index}
                                    reviewData={order}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Reviews.layout = (page) => <EcommerceLayout children={page} />;
export default Reviews;
