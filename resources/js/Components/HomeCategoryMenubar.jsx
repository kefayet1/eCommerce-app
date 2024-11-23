import { Link, usePage } from "@inertiajs/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeCategoryMenubar = ({ categoryTree }) => {
    console.log(categoryTree);

    return (
        <ul className="flex flex-col gap-2 rounded-md z-20 p-5 shadow-md relative menu">
            {categoryTree.map((category) => (
                <li
                    key={category.id}
                    className="py-2 border-b last:border-b-0 pl-3 flex items-center justify-between"
                >
                    <Link href={category.parent_id && `/filterProduct/${category.name}`} className="text-base">{category.name}</Link>
                    {category.childCategories && category.childCategories.length > 0 && (
                        <>
                            <MdOutlineKeyboardArrowRight />
                            <HomeCategoryMenubar
                                categoryTree={category.childCategories}
                            />
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HomeCategoryMenubar;
