import { usePage } from "@inertiajs/react";
import Product from "../Product";

const PopularProduct = () => {
    const { props } = usePage();

    console.log(props);
    return (
        <div class="pt-16 ">
            <h2 class="text-2xl font-bold tracking-tight  mb-6">
                Popular Product
            </h2>

            <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-4 gap-2">
                {props.popular.map((product) => (
                    <Product key={product.id} productDetails={product} />
                ))}
                {/* <Product/>
                <Product/>
                <Product/> */}
            </div>
        </div>
    );
};

export default PopularProduct;
