import { router, usePage } from "@inertiajs/react";
import Product from "./Product";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";


const FilterProductSection = () => {
    const { props } = usePage();

    const handleProductPagination = (e,page) => {
        // e.preventDefault();
        router.get(`filterProduct?page=${page}`);
    };

    console.log(props);
    return (
        <div class="p-5 ">
            <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-4 gap-2">
                {props.products.data.map((product) => (
                    <Product productDetails={product} />
                ))}
            </div>
            <div className="flex justify-center py-10">
                <Stack spacing={2}>
                    <Pagination
                        count={props.products.last_page}
                        size="large"
                        shape="rounded"
                        variant="outlined"
                        color="primary"
                        page={props.products.current_page}
                        onChange={(e, page) => handleProductPagination(e,page)}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default FilterProductSection;
