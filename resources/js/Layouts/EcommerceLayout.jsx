import Footer from "@/Components/ecommerce/Footer";
import { hideMenu } from "@/features/showMoblieSlice";
import { Badge } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@inertiajs/react";

const EcommerceLayout = ({ children }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="border-b border-black">
                <nav className="max-w-[1320px] lg:w-[80%] w-[95%] mx-auto flex items-center justify-between py-3">
                    <div className="left">
                        <Link href="/">
                            <img
                                src="https://kohler.scene7.com/is/image/Kohler/KohlerLogoImage?$CorpSecondary$&crop=110,0,23778,16000&wid=590&hei=397&wid=590&hei=397"
                                className="w-20"
                            />
                        </Link>
                    </div>
                    <div className="middle lg:block hidden">
                        <div class="relative text-gray-600">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className="bg-white h-10 w-[400px] md:w-[300px] px-5 pr-10 rounded-full text-sm focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 mt-3 mr-4"
                            >
                                <BsSearch />
                            </button>
                        </div>
                    </div>
                    <div className="right flex items-center gap-4">
                        <div className="hidden md:block">
                            <button className="px-6 py-2  text-black text-sm rounded-md font-semibold  ">
                                Login
                            </button>
                            <button className="px-6 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                                Register
                            </button>
                        </div>
                        <div className="md:hidden sm:block">
                            <RxHamburgerMenu
                                size={"24"}
                                onClick={() => dispatch(hideMenu())}
                            />
                        </div>
                        <div className="">
                            <Badge badgeContent={4} color="primary">
                                <MdOutlineShoppingCart size="25" />
                            </Badge>
                        </div>
                    </div>
                </nav>
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default EcommerceLayout;
