import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { Link, usePage } from "@inertiajs/react";

const PaymentSuccess = () => {
    const { props } = usePage();
    console.log(props);
    return (
        <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
                    Thanks for your order!
                </h2>
                <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                    Your order{" "}
                    <a
                        href="#"
                        class="font-medium text-gray-900 dark:text-white hover:underline"
                    >
                        #{props.orderId}
                    </a>{" "}
                    will be processed within 24 hours during working days. We
                    will notify you by email once your order has been shipped.
                </p>
                <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Date
                        </dt>
                        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                            14 May 2024
                        </dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Payment Method
                        </dt>
                        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                            {props.paymentMethod}
                        </dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Name
                        </dt>
                        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                            Flowbite Studios LLC
                        </dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Address
                        </dt>
                        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                        {props?.ship_details}
                        </dd>
                    </dl>
                    <dl class="sm:flex items-center justify-between gap-4">
                        <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Phone
                        </dt>
                        <dd class="font-medium text-gray-900 dark:text-white sm:text-end">
                        {props?.phone}
                        </dd>
                    </dl>
                </div>
                <div class="flex items-center space-x-4">
                    <a
                        href="#"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                        Track your order
                    </a>
                    <Link
                        href="/"
                        class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Return to shopping
                    </Link>
                </div>
            </div>
        </section>
    );
};

PaymentSuccess.layout = (page) => <EcommerceLayout children={page} />;
export default PaymentSuccess;
