import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const HomeCategoryMobileMenu = ({ category }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="w-full hover:bg-blue-100 hover:text-[#000] px-2 py-2">
                <div
                    className="flex rounded-sm hover:bg-blue-300 justify-between items-center px-2 py-2"
                    
                >
                    <span>{category.name}</span>
                    {category?.childCategories?.length > 0 && (
                        <span>
                            {open ? (
                                <MdKeyboardArrowDown size={20} onClick={() => setOpen(!open)}/>
                            ) : (
                                <MdKeyboardArrowRight size={20} onClick={() => setOpen(!open)}/>
                            )}
                        </span>
                    )}
                </div>
                <div className={`h-${open ? "auto" : 0} overflow-hidden`}>
                    {category?.childCategories?.map((child, index) => (
                        <HomeCategoryMobileMenu key={index} category={child} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeCategoryMobileMenu;
