import OrderTableItem from "@/Components/dashboard/OrderTableItem";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router, usePage } from "@inertiajs/react";

const Orders = () => {
    const { props } = usePage();

    console.log(props.orders.links);
    const handleDeleteProduct = (id) => {
        router.post("/orderDelete", { id });
    };
    return (
        <div class="flex flex-col mt-10">
            <div class=" overflow-x-auto pb-4">
                <div class="min-w-full inline-block align-middle">
                    <div class="overflow-hidden  border rounded-lg border-gray-300">
                        <table class="table-auto min-w-full rounded-xl">
                            <thead>
                                <tr class="bg-gray-50">
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Total Price{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Total Discount{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                                    >
                                        {" "}
                                        Full Name &amp; Email{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Total Tax{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Payment Method{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Payment Status{" "}
                                    </th>

                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Delivery Status{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                    >
                                        {" "}
                                        Actions{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-300 ">
                                {props.orders.data.map((order, index) => (
                                    <OrderTableItem key={index} data={order} handleDeleteProduct={handleDeleteProduct}/>
                                ))}
                            </tbody>
                        </table>
                        <div className="py-10 text-center">
                            {props.orders.links.map((link) =>
                                link.url ? (
                                    <Link
                                        className={`p-1 mx-1 ${
                                            link.active
                                                ? "font-bold text-blue-600  px-2 border rounded border-blue-500 bg-blue-200"
                                                : ""
                                        }`}
                                        key={link.label}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        className="cursor-not-allowed text-gray-300"
                                        key={link.label}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Orders.layout = (page) => (
    <DashboardLayout pageName={"Orders"} children={page} />
);
export default Orders;
