import Product from "../Product"

const FeatureProduct = () => {
  return (
    <div class="pt-16 ">
            <h2 class="text-2xl font-bold tracking-tight  mb-6">
                Feature Product
            </h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className="grid lg:grid-cols-4 mt-5 md:grid-cols-2 grid-cols-1  gap-4">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
  )
}

export default FeatureProduct
