import FilterProductSection from "@/Components/FilterProductSection";
import ProductFilterMenu from "@/Components/ProductFilterMenu";
import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

const ProductFilterPage = () => {
    const [openFilterMenu, setOpenFilterMenu] = useState(true);
    const handleProductPagination = (page, categories, newVal) => {
        console.log(newVal, "hello world");
        // e.preventDefault();
        router.get(`filterProduct?page=${page}`, {
            categories: categories ,
            priceRange: newVal
        });
    };
    return (
        <div className="max-w-[1320px]  lg:w-[80%] w-full mx-auto flex">
            <div className="leftSide">
                <div className="hidden lg:block">
                    <ProductFilterMenu
                        openFilterMenu={openFilterMenu}
                        setOpenFilterMenu={setOpenFilterMenu}
                        handleProductPagination={handleProductPagination}
                    />
                </div>

                <div className="lg:hidden">
                    {openFilterMenu && (
                        <ProductFilterMenu
                            openFilterMenu={openFilterMenu}
                            setOpenFilterMenu={setOpenFilterMenu}
                            myClass={
                                "absolute top-0 transition-transform -translate-x-full left-80"
                            }
                            handleProductPagination={handleProductPagination}
                        />
                    )}
                </div>
            </div>

            <div className="rightSide h-auto">
                <FilterProductSection
                    handleProductPagination={handleProductPagination}
                />
            </div>
        </div>
    );
};
ProductFilterPage.layout = (page) => <EcommerceLayout children={page} />;
export default ProductFilterPage;
