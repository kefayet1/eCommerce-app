import { router, useForm, usePage } from "@inertiajs/react";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const TableItem = ({ data }) => {
    const [showEditFrom, setShowEditFrom] = useState(false);
    const FormRef = useRef(null);
    const ClickInput = useRef(null);
    const {
        data: formData,
        setData: setFormData,
        post,
        progress,
    } = useForm({
        name: "",
        price: "",
        unit: "",
        categoryId: 0,
        image: null,
    });
    const [openMenu, setOpenMenu] = useState(false);
    const { props } = usePage();
    const handleDeleteProduct = () => {
        router.post("/deleteProduct", { id: data.id });
    };

    const handleEditProduct = () => {
        setShowEditFrom(!showEditFrom);
        setFormData({
            id: data.id,
            name: data.productName,
            price: data.price,
            unit: data.unit,
            categoryId: data.categoryId,
            oldImage: data.img_url,
        });
    };
    console.log(data.img_url);

    const handleHideForm = (e) => {
        if (FormRef.current && !FormRef.current.contains(e.target)) {
            console.log("helle event");
            setShowEditFrom(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleHideForm, true);

        () => {
            document.removeEventListener("click", handleHideForm, true);
        };
    }, []);

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        post("/editProduct", {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: "",
                    price: "",
                    unit: "",
                    categoryId: 0,
                    image: null,
                }),
                setShowEditFrom(false);
            },
        });
        setShowEditFrom(false);
        setOpenMenu(false);
    };

    return (
        <>
            {showEditFrom && (
                <div className="w-full h-screen flex justify-center items-center bg-[#11111194] absolute top-0 left-0 z-50">
                    <div
                        className="rounded-lg bg-white p-8 shadow lg:col-span-3 lg:p-12 md:h-3/5  md:w-5/6 lg:w-8/12 lg:ml-80"
                        ref={FormRef}
                    >
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" for="email">
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="email"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData("name", e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" for="phone">
                                        Price
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price"
                                        type="number"
                                        id="phone"
                                        value={formData.price}
                                        onChange={(e) =>
                                            setFormData("price", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" for="email">
                                        Unit
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Unit"
                                        type="number"
                                        id="email"
                                        value={formData.unit}
                                        onChange={(e) =>
                                            setFormData("unit", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <Autocomplete
                                        value={props?.categories.find(
                                            (category) =>
                                                category.id === data.categoryId
                                        )}
                                        onChange={(e, value) =>
                                            setFormData("categoryId", value?.id)
                                        }
                                        disablePortal
                                        options={props?.categories}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Movie"
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            <div>
                                <div
                                    className={`w-full border-2 py-2 ${
                                        !formData.oldImage && "py-14"
                                    } rounded-lg border-gray-200 text-sm flex items-center justify-center`}
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                    onClick={() => ClickInput.current.click()}
                                >
                                    {formData.image || formData.oldImage ? (
                                        <img
                                            src={
                                                formData.image
                                                    ? URL.createObjectURL(
                                                          formData.image
                                                      )
                                                    : `http://127.0.0.1:8000/${formData.oldImage}`
                                            }
                                            alt="Selected"
                                            className="object-cover h-48 w-96"
                                        />
                                    ) : (
                                        <CiImageOn size={70} />
                                    )}
                                    <input
                                        type="file"
                                        hidden
                                        ref={ClickInput}
                                        onChange={(e) =>
                                            setFormData(
                                                "image",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={handleEditFormSubmit}
                                    className={`inline-block w-full rounded-lg ${
                                        progress ? "bg-slate-700" : "bg-black"
                                    } px-5 py-3 font-medium text-white sm:w-auto`}
                                    disabled={progress}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <tr
                tabindex="0"
                className="focus:outline-none h-16 border border-gray-100 rounded"
            >
                <td>
                    <div className="ml-5 flex justify-center items-center h-20">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <img
                                src={`http://127.0.0.1:8000/${data.img_url}`}
                                alt=""
                            />
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {data.productName}
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                                stroke="#3B82F6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                                stroke="#3B82F6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </div>
                </td>
                <td className="pl-24">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                            {data.price}
                        </p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                            {data.unit}
                        </p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                            {data.categoryName}
                        </p>
                    </div>
                </td>
                <td className="pl-5">
                    <div className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                        {new Date(data.created_at).toLocaleString()}
                    </div>
                </td>
                <td className="pl-4">
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                        View
                    </button>
                </td>
                <td>
                    <div className="relative px-5 pt-2">
                        <button
                            className="focus:ring-2 rounded-md focus:outline-none"
                            onclick="dropdownFunction(this)"
                            role="button"
                            aria-label="option"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <svg
                                className="dropbtn"
                                onclick="dropdownFunction(this)"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                    stroke="#9CA3AF"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                    stroke="#9CA3AF"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                    stroke="#9CA3AF"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>
                        {openMenu && (
                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                <div
                                    tabindex="0"
                                    className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                                    onClick={handleEditProduct}
                                >
                                    <p>Edit</p>
                                </div>
                                <div
                                    tabindex="0"
                                    className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                                    onClick={handleDeleteProduct}
                                >
                                    <p>Delete</p>
                                </div>
                            </div>
                        )}
                    </div>
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>
    );
};

export default TableItem;
