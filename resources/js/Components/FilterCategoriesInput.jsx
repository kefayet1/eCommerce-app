import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

const FilterCategoriesInput = ({ category, handleProductPagination }) => {
    const { props } = usePage();
    return (
        <div className="flex items-center">
            <input
                id={category.name}
                type="checkbox"
                value=""
                checked={props.categoriesParam?.includes(category.name)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
                onClick={() =>
                    handleProductPagination(
                        0,
                        !props.categoriesParam ? [category.name] :
                        props.categoriesParam?.includes(category.name)
                            ? props.categoriesParam.filter((cate) => cate !== category.name)
                            : [...props.categoriesParam, category.name]
                    )
                }
            />

            <label
                for={category.name}
                className="ml-2 text-sm font-medium text-gray-900"
            >
                {category.name}
            </label>
        </div>
    );
};

export default FilterCategoriesInput;
