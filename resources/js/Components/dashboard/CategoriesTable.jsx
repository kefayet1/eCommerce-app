import { DashboardActionContext } from "@/Context/DashboardActionContext";
import { useForm, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import CategoriesTableItem from "./CategoriesTableItem";

const CategoriesTable = () => {
    const FormRef = useRef(null);
    const { a, b, showForm, setShowForm } = useContext(DashboardActionContext);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });
    const { url, props } = usePage();

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

    const handleSubmitForm = (e) => {
        e.preventDefault();
        post("/createCategory");
        setShowForm(false);
    };

    return (
        <>
            {showForm && url === "/categories" && (
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
                                            Category Name
                                        </label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
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
            {
                props.categories.map(category => (
                    <CategoriesTableItem category={category}/>
                ))
            }
            <tr className="h-3"></tr>
        </>
    );
};

export default CategoriesTable;
