import Footer from "@/Components/ecommerce/Footer";
import { hideMenu } from "@/features/showMoblieSlice";
import { Avatar, Badge, Divider, IconButton, MenuItem } from "@mui/material";
import { BsPersonAdd, BsSearch } from "react-icons/bs";
import { IoLogOut, IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
// import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from "@mui/material/ListItemIcon";
import { CiLogout, CiSettings } from "react-icons/ci";

const EcommerceLayout = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const cartProduct = useSelector((state) => state.cartProduct);
    const dispatch = useDispatch();
    const { props } = usePage();
    console.log(props.auth);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        router.post("/logout");
    };
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
                        {!props.auth.user && (
                            <div className="hidden md:block">
                                <Link
                                    href="/login"
                                    className="px-6 py-2  text-black text-sm rounded-md font-semibold  "
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register "
                                    className="px-6 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                        <div className="lg:hidden md:block">
                            <RxHamburgerMenu
                                size={"24"}
                                onClick={() => dispatch(hideMenu())}
                            />
                        </div>
                        <div className="">
                            <Link href="/cart">
                                <Badge
                                    badgeContent={cartProduct.length || 0}
                                    color="primary"
                                >
                                    <MdOutlineShoppingCart size="25" />
                                </Badge>
                            </Link>
                        </div>
                        {props.auth.user && (
                            <div className="">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        open ? "account-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>
                                        {props.auth.user.name[0].toUpperCase()}
                                    </Avatar>
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: "visible",
                                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                mt: 1.5,
                                                "& .MuiAvatar-root": {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                "&::before": {
                                                    content: '""',
                                                    display: "block",
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: "background.paper",
                                                    transform:
                                                        "translateY(-50%) rotate(45deg)",
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{
                                        horizontal: "right",
                                        vertical: "top",
                                    }}
                                    anchorOrigin={{
                                        horizontal: "right",
                                        vertical: "bottom",
                                    }}
                                >
                                    <Link href="/myAccount">
                                        <MenuItem onClick={handleClose}>
                                            <Avatar /> My account
                                        </MenuItem>
                                    </Link>
                                    {/* <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <BsPersonAdd size={23} />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <CiSettings size={23} />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem> */}

                                    <span onClick={handleLogout}>
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <CiLogout size={23} />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </span>
                                </Menu>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default EcommerceLayout;
