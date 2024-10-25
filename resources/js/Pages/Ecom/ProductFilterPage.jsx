import FilterProductSection from "@/Components/FilterProductSection";
import ProductFilterMenu from "@/Components/ProductFilterMenu";
import EcommerceLayout from "@/Layouts/EcommerceLayout";
import React from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const ProductFilterPage = () => {
    const [openFilterMenu, setOpenFilterMenu] = useState(true);

    return (
        <div className="max-w-[1320px]  lg:w-[80%] w-full mx-auto flex">
            <div className="leftSide">
                <div className="hidden lg:block">
                    <ProductFilterMenu
                        openFilterMenu={openFilterMenu}
                        setOpenFilterMenu={setOpenFilterMenu}
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
                        />
                    )}
                </div>
            </div>

            <div className="rightSide h-auto">
                <FilterProductSection />
            </div>
        </div>
    );
};
ProductFilterPage.layout = (page) => <EcommerceLayout children={page} />;
export default ProductFilterPage;
