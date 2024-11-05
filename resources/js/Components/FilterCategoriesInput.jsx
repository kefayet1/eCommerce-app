const FilterCategoriesInput = ({ category }) => {
    return (
        <div className="flex items-center">
            <input
                id={category.name}
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2 "
            />

            <label for={category.name} className="ml-2 text-sm font-medium text-gray-900">
                {category.name}
            </label>
        </div>
    );
};

export default FilterCategoriesInput;
