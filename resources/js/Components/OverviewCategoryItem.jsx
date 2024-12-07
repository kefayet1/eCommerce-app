import React from "react";

const OverviewCategoryItem = ({ data }) => {
    return (
        <tr>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div class="flex items-center gap-x-2">
                    <div>
                    <img
                        class="object-cover w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt=""
                    />
                    </div>
                    <div>
                        <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                            {data.name}
                        </h2>
                        <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                            {data.name}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            {data.productQty}
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            {data.productSalePrice}
            </td>
        </tr>
    );
};

export default OverviewCategoryItem;
