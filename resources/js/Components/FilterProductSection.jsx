import Product from "./Product";

const FilterProductSection = () => {
    return (
        <div class="p-5 ">
            <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-4 gap-2">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default FilterProductSection;
