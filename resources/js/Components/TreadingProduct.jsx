import React from "react";
import Product from "./Product";

const TreadingProduct = () => {
    return (
        <div class="pt-16 ">
            <h2 class="text-2xl font-bold tracking-tight  mb-6">
                Treading Product
            </h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default TreadingProduct;
