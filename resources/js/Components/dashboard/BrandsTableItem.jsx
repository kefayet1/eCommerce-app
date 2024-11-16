import { DashboardActionContext } from "@/Context/DashboardActionContext";
import { router, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const BrandsTableItem = ({ brand }) => {
    const FormRef = useRef(null);
    const [showEditForm, setShowEditForm] = useState(false);
    const [name, setName] = useState("");
    const handleDelete = (e, id) => {
        e.preventDefault();
        router.post("/deleteBrand", { id });
    };

    const handleSidebar = (e) => {
        if (FormRef.current && !FormRef.current.contains(e.target)) {
            setShowEditForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleSidebar, true);

        () => {
            document.removeEventListener("click", handleSidebar, true);
        };
    }, []);

    const handleEdit = () => {
        setShowEditForm(true);
        setName(brand.name);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        router.post("/editBrand", {
            id: brand.id,
            name: name,
        });
        setShowEditForm(false);
    };
    return (
        <>
            {showEditForm && (
                <div className="w-full h-screen flex justify-center bg-[#11111194] absolute top-0 left-0 z-50">
                    <div
                        className="flex justify-center w-[25rem] h-28 p-5 bg-white lg:ml-20 mt-40 rounded-md"
                        ref={FormRef}
                    >
                        <form
                            action=""
                            className="flex items-center gap-5"
                            onSubmit={handleSubmitForm}
                        >
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 flex flex-col">
                                        <label for="full_name">
                                            Brand Name
                                        </label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="inline-flex items-center justify-center h-10 px-3 py-1 mt-5 text-sm font-medium leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                data-rounded="rounded-md"
                                data-primary="blue-600"
                                data-primary-reset="{}"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <tr
                tabindex="0"
                className="focus:outline-none h-16 border border-gray-100 rounded"
            >
                <td className="">
                    <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {brand.name}
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

                <td className="pl-5">
                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700  rounded">
                        {new Date(brand.created_at).toLocaleString()}
                    </button>
                </td>
                <td className="pl-4">
                    <button
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none mr-2"
                        onClick={() => handleEdit(brand.id)}
                    >
                        Edit
                    </button>

                    <button
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-bold leading-none text-red-600 py-3 px-5  rounded hover:bg-gray-200 focus:outline-none"
                        onClick={(e) => handleDelete(e, brand.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default BrandsTableItem;
