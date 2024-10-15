import ProductTable from "@/Components/dashboard/ProductTable";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import {
    Autocomplete,
    TextField,
} from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { CiImageOn } from "react-icons/ci";

const Product = () => {
    const FormRef = useRef(null);
    const { showForm, setShowForm } = useContext(DashboardActionContext);
    const ClickInput = useRef(null);
    const { data, setData, post, progress } = useForm({
        name: "",
        price: "",
        unit: "",
        categoryId: 0,
        image: null,
    });

    const { props } = usePage();

    const handleHideForm = (e) => {
        if (FormRef.current && !FormRef.current.contains(e.target)) {
            console.log("helle event");
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleHideForm, true);

        () => {
            document.removeEventListener("click", handleHideForm, true);
        };
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post("/createProduct", {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: "",
                    price: "",
                    unit: "",
                    categoryId: 0,
                    image: null,
                }),
                    setShowForm(false);
            },
        });
    };

    console.log(props, "products");
    // Get the current page from the pagination data
    const currentPage = props.products.current_page;

    // const handlePageChange = (event, value) => {
    //     event.preventDefault();
    //     Inertia.visit(`/products?page=${value}`);
    // };

    console.log(props, "products");

    return (
        <>
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div className="mt-7 overflow-x-auto">
                    <table className="whitespace-nowrap">
                        {showForm && (
                            <div className="w-full h-screen flex justify-center items-center bg-[#11111194] absolute top-0 left-0 z-50">
                                <div
                                    className="rounded-lg bg-white p-8 shadow lg:col-span-3 lg:p-12 md:h-3/5  md:w-5/6 lg:w-8/12 lg:ml-80"
                                    ref={FormRef}
                                >
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    className="sr-only"
                                                    for="email"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Name"
                                                    type="text"
                                                    id="email"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    className="sr-only"
                                                    for="phone"
                                                >
                                                    Price
                                                </label>
                                                <input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Price"
                                                    type="number"
                                                    id="phone"
                                                    value={data.price}
                                                    onChange={(e) =>
                                                        setData(
                                                            "price",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    className="sr-only"
                                                    for="email"
                                                >
                                                    Unit
                                                </label>
                                                <input
                                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Unit"
                                                    type="number"
                                                    id="email"
                                                    value={data.unit}
                                                    onChange={(e) =>
                                                        setData(
                                                            "unit",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <Autocomplete
                                                    onChange={(e, value) =>
                                                        setData(
                                                            "categoryId",
                                                            value?.id
                                                        )
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
                                                    !data.image && "py-20"
                                                } rounded-lg border-gray-200 text-sm flex items-center justify-center`}
                                                placeholder="Message"
                                                rows="8"
                                                id="message"
                                                onClick={() =>
                                                    ClickInput.current.click()
                                                }
                                            >
                                                {!data.image ? (
                                                    <CiImageOn size={70} />
                                                ) : (
                                                    <img
                                                        src={URL.createObjectURL(
                                                            data.image
                                                        )}
                                                        alt="Selected"
                                                        className="object-cover h-48 w-96"
                                                    />
                                                )}
                                                <input
                                                    type="file"
                                                    hidden
                                                    ref={ClickInput}
                                                    onChange={(e) =>
                                                        setData(
                                                            "image",
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                onClick={handleFormSubmit}
                                                className={`inline-block w-full rounded-lg ${
                                                    progress
                                                        ? "bg-slate-700"
                                                        : "bg-black"
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
                        <tbody>
                            <ProductTable />
                        </tbody>
                        <div className="py-10 text-center">
                            {props.products.links.map((link) =>
                                link.url ? (
                                    <Link
                                        className={`p-1 mx-1 ${
                                            link.active
                                                ? "font-bold text-blue-400 underline"
                                                : ""
                                        }`}
                                        key={link.label}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        className="cursor-not-allowed text-gray-300"
                                        key={link.label}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    ></span>
                                )
                            )}
                        </div>
                    </table>
                </div>
            </div>
        </>
    );
};

Product.layout = (page) => (
    <DashboardLayout children={page} pageName={"Product"} />
);
export default Product;
