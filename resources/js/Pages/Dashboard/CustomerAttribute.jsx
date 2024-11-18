import CustomerAttributeTable from "@/Components/dashboard/CustomerAttributeTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";

const CustomerAttribute = () => {
    return (
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div class="mt-7 overflow-x-auto">
                <table class="w-full whitespace-nowrap">
                    <tbody>
                        <CustomerAttributeTable />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CustomerAttribute.layout = (page) => (
    <DashboardLayout pageName={"Custom Attribute"} children={page} />
);

export default CustomerAttribute;
