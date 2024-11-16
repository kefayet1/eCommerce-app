import BrandsTable from "@/Components/dashboard/BrandsTable";
import CategoriesTable from "@/Components/dashboard/CategoriesTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";

const Brand = () => {
    return (
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div class="mt-7 overflow-x-auto">
                <table class="w-full whitespace-nowrap">
                    <tbody>
                        <BrandsTable />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Brand.layout = (page) => <DashboardLayout children={page} pageName={"Brand"} />;

export default Brand;
