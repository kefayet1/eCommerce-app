import React from "react";
import Product from "./Product";
import { usePage } from "@inertiajs/react";

const TreadingProduct = () => {
    const { props } = usePage();
    return (
        <div class="pt-16 ">
            <h2 class="text-2xl font-bold tracking-tight  mb-6">
                Top selling product
            </h2>

            <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-4 gap-2">
                {props.top.map((product) => (
                    <Product productDetails={product} />
                ))}
            </div>
        </div>
    );
};

export default TreadingProduct;
