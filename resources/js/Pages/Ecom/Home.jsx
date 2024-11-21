import EcommerceLayout from "@/Layouts/EcommerceLayout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "@/features/showMoblieSlice";
import { useRef } from "react";
import PopularProduct from "@/Components/ecommerce/PopularProduct";
import FeatureProduct from "@/Components/ecommerce/FeatureProduct";
import TreadingProduct from "@/Components/TreadingProduct";
import { usePage } from "@inertiajs/react";
import HomeCategoryMenubar from "@/Components/HomeCategoryMenubar";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeCategoryMobileMenu from "@/Components/HomeCategoryMobileMenu";

const Home = () => {
    // const [shadowColor, setShadowColor] = useState({
    //     color: "pink",
    //     count: 0,
    // });
    const MenuRef = useRef(null);
    const dispatch = useDispatch();
    const { props } = usePage();
    const [dropDownHover, setDropDownHover] = useState(null);

    const mobileMenu = useSelector((state) => state.mobileMenu);

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        // setOpen(newOpen);
        dispatch(hideMenu());
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShadowColor((prev) => {
    //             if (prev.count === 0) {
    //                 return { color: "orange", count: 1 };
    //             } else if (prev.count === 1) {
    //                 return { color: "blue", count: 2 };
    //             } else {
    //                 return { color: "pink", count: 0 };
    //             }
    //         });
    //     }, 3000);

    //     return () => clearInterval(interval); // cleanup interval on component unmount
    // }, []);

    // console.log(props.categories.length);
    const handleHover = (e, index) => {
        setDropDownHover(index);
    };

    const handleHoverLeave = () => {
        setDropDownHover(null);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100,
                background: "#fff",
                height: "100%",
            }}
            role="presentation"
            // onClick={toggleDrawer(false)}
        >
            {props.categoryTree.map((category) => (
                <HomeCategoryMobileMenu
                    index={category.id}
                    category={category}
                />
            ))}
        </Box>
    );
    return (
        <div className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto mb-20">
            {/* <div
                id="drawer-right-example"
                class={`fixed top-0 right-${
                    mobileMenu ? 96 : 0
                } rig z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 shadow-2xl`}
                tabindex="-1"
                aria-labelledby="drawer-right-label"
            >

                <button
                    type="button"
                    data-drawer-hide="drawer-right-example"
                    aria-controls="drawer-right-example"
                    class="bg-transparent hover:bg-gray-400  rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center  dark:hover:text-white"
                    onClick={() => dispatch(hideMenu())}
                >
                    <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>

                <div class="">
                    <div className="ml">
                        <div className="flex flex-col gap-2 rounded-md  ">
                            <div className="py-2 border-b pl-3 flex items-center justify-between">
                                <h5 className="text-base">Fashion</h5>
                            </div>
                            <div className="py-2 border-b pl-3 flex items-center justify-between">
                                <h5 className="text-based">Kitchen</h5>
                            </div>
                            <div className="py-2 border-b pl-3 flex items-center justify-between">
                                <h5 className="text-based">Computer</h5>
                            </div>
                            <div className="p border-b pl-3 flex items-center justify-between">
                                <h5>Bags</h5>
                            </div>
                            <div className="py-2 border-b pl-3 flex items-center justify-between">
                                <h5 className="text-base">Watches</h5>
                            </div>

                            <div className="py-2  pl-3 flex items-center justify-between">
                                <h5 className="text-base">Jewelry</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Drawer open={mobileMenu} onClose={toggleDrawer()}>
                {DrawerList}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Drawer>

            <div className="flex mt-4">
                <div className="w-3/12 lg:block ml hidden z-20">
                    <HomeCategoryMenubar categoryTree={props.categoryTree} />
                    {/* <ul className="flex flex-col gap-2 rounded-md z-20 p-5 shadow-md relative">
                        {props.categoryTree.map((category, index) => (
                            <>
                                <li
                                    key={category.id}
                                    className={`py-2 ${
                                        index !==
                                            props.categoryTree.length - 1 &&
                                        "border-b"
                                    } pl-3 flex items-center justify-between`}
                                    onMouseEnter={(e) => handleHover(e, index)}
                                    onMouseLeave={(e) => handleHoverLeave(e)}
                                >
                                    <h5 className="text-base">
                                        {category.name}
                                    </h5>
                                    {category.childCategories.length !== 0 && (
                                        <MdOutlineKeyboardArrowRight />
                                    )}
                                </li>
                                {/* {category.childCategories.length !== 0 &&
                                    dropDownHover === index && (
                                        <ul
                                            className="flex pl-3  left-60 flex-col absolute gap-2 z-20 rounded-md p-5 shadow-md"
                                            onMouseEnter={() =>
                                                handleParentHover(index)
                                            }
                                            onMouseLeave={handleHoverLeave}
                                        >
                                            {category.childCategories.map(
                                                (childCategories) => (
                                                    <li className="py-2 border-b pl-3 flex items-center justify-between">
                                                        <h5 className="text-based">
                                                            {
                                                                childCategories.name
                                                            }
                                                        </h5>
                                                        <MdOutlineKeyboardArrowRight />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )} */}
                    {/* </> */}
                    {/* ))} */}
                    {/* <div className="py-2 border-b pl-3 flex items-center justify-between">
                            <h5 className="text-based">Kitchen</h5>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <div className="py-2 border-b pl-3 flex items-center justify-between">
                            <h5 className="text-based">Computer</h5>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <div className="py-2 border-b pl-3 flex items-center justify-between">
                            <h5>Bags</h5>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                        <div className="py-2 border-b pl-3 flex items-center justify-between">
                            <h5 className="text-base">Watches</h5>
                            <MdOutlineKeyboardArrowRight />
                        </div>

                        <div className="py-2  pl-3 flex items-center justify-between">
                            <h5 className="text-base">Jewelry</h5>
                            <MdOutlineKeyboardArrowRight />
                        </div> */}
                    {/* </ul> */}
                </div>
                <div
                    className={`slider lg:w-9/12 lg:ml-5  w-full p-3 shadow-pink-300 shadow-lg border-1 border-black`}
                >
                    <Swiper
                        pagination={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                src="http://127.0.0.1:8000/slider/2150165468.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="http://127.0.0.1:8000/slider/discount-purse-podium.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-full h-full">
                                <img
                                    src="http://127.0.0.1:8000/slider/discount-jacket-podium.jpg"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <PopularProduct />

            <div className="flex justify-between lg:gap-5 gap-3 mt-8">
                <div className="w-full md:w-3/6 lg:h-64 flex items-center justify-center bg-[#F6F7F2] shadow-sm p-2">
                    <img
                        src="http://127.0.0.1:8000/themeImage/11786829_4787643.jpg"
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="w-full md:w-3/6 lg:h-64 flex items-center justify-center bg-[#7A7392]">
                    <img
                        src="http://127.0.0.1:8000/themeImage/banner-lavender-oil-template_23-2148797760.jpg"
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <FeatureProduct />

            <div className="mt-7">
                <img
                    src="http://127.0.0.1:8000/themeImage/375800709_be88a25d-bfd4-4be1-b3b4-2757192af14c.jpg"
                    alt=""
                />
            </div>

            <TreadingProduct />
        </div>
    );
};
Home.layout = (page) => <EcommerceLayout children={page} />;
export default Home;
