import { Link, router, usePage } from "@inertiajs/react";
import Product from "./Product";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const FilterProductSection = () => {
    const { props } = usePage();

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
                    {/* <Pagination
                        count={props.products.last_page}
                        size="large"
                        shape="rounded"
                        variant="outlined"
                        color="primary"
                        page={props.products.current_page}
                        onChange={(e, page) => handleProductPagination(page, props.categoriesParam, props?.heistLowProdPrice)}
                    /> */}
                    <div class="flex space-x-1">
                        {props.products.links.map((product) => {
                            if (product.label === "&laquo; Previous") {
                                return (
                                    <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                        Prev
                                    </button>
                                );
                            } else if (product.label === "Next &raquo;") {
                                return (
                                    <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                        Next
                                    </button>
                                );
                            } else {
                                return (
                                    <Link
                                        href={product.url}
                                        key={product.label}
                                        className={`min-w-9 rounded-md  py-2 px-3 border border-transparent text-center text-sm ${
                                            product.active
                                                ? " text-white bg-black"
                                                : "text-black bg-white"
                                        } transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
                                    >
                                        {product.label}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </Stack>
            </div>
        </div>
    );
};

export default FilterProductSection;
