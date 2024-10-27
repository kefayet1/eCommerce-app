import { usePage } from "@inertiajs/react";
import Product from "../Product"

const FeatureProduct = () => {
  const { props } = usePage();
  return (
    <div class="pt-16 ">
            <h2 class="text-2xl font-bold tracking-tight  mb-6">
                Feature Product
            </h2>

            <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-4 gap-2">
                {props.featuredProduct.map(product => (
                  <Product key={product.id} productDetails={product}/>
                ))}
            </div>
        </div>
  )
}

export default FeatureProduct
