import SubCateTableInput from "@/Components/dashboard/SubCateTableInput";
import { DashboardActionContext } from "@/Context/DashboardActionContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";

const SubCategories = () => {
    const FormRef = useRef(null);
    const { props } = usePage();
    const { a, b, showForm, setShowForm } = useContext(DashboardActionContext);
    const [openEditForm, setOpenEditForm] = useState(false);
    const [editFormData, setEditFormData] = useState({});
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        parent_id: null,
    });

    const handleHideForm = (e) => {
        if (FormRef.current && !FormRef.current.contains(e.target)) {
            console.log("helle event");
            setShowForm(false);
            setOpenEditForm(false);
            setData({
                name: "",
                parent_id: "",
                id: 0,
            });
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
        post("/createSubCategory", {
            onSuccess: () => {
                console.log("success");
            },
        });
    };

    console.log(props);

    const getEditFrom = (data) => {
        console.log(data);
        setOpenEditForm(true);
        setEditFormData(data);
        setData({
            name: data.name,
            id: data.id,
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        post("/editSubCategory", {
            onSuccess: () => {
                setOpenEditForm(false);
                console.log("success");
            },
        });
    };

    return (
        <>
            {(showForm || openEditForm) && (
                <div className="w-full h-screen flex justify-center bg-[#11111194] absolute top-0 left-0 z-50">
                    <div
                        className="flex justify-center w-[25rem] h-64 p-5 bg-white lg:ml-20 mt-40 rounded-md"
                        ref={FormRef}
                    >
                        <form
                            action=""
                            className=""
                            onSubmit={
                                openEditForm
                                    ? handleEditSubmit
                                    : handleSubmitForm
                            }
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
                                    <div className="md:col-span-5 flex flex-col">
                                        <Autocomplete
                                            disablePortal
                                            options={props.categories}
                                            sx={{ width: 300 }}
                                            onChange={(index, value) => {
                                                setData("parent_id", value.id);
                                            }}
                                            defaultValue={
                                                openEditForm
                                                    ? {
                                                          label: editFormData.parent_name,
                                                          id: editFormData.id,
                                                      }
                                                    : null
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Select Parent Name"
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="inline-flex items-center justify-center h-10 px-3 py-1 mt-5 text-sm font-medium leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                data-rounded="rounded-md"
                                data-primary="blue-600"
                                data-primary-reset="{}"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <div class="flex flex-col mt-10">
                <div class=" overflow-x-auto pb-4">
                    <div class="min-w-full inline-block align-middle">
                        <div class="overflow-hidden  border rounded-lg border-gray-300">
                            <table class="table-auto min-w-full rounded-xl">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            Name{" "}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            Parent Name{" "}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                                        >
                                            {" "}
                                            Full Name &amp; Email{" "}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            Join Date{" "}
                                        </th>

                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            Status{" "}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            Actions{" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-300 ">
                                    {props.subCategory.map((category) => (
                                        <SubCateTableInput
                                            data={category}
                                            key={category.id}
                                            getEditFrom={getEditFrom}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

SubCategories.layout = (page) => (
    <DashboardLayout children={page} pageName={"Sub categories"} />
);
export default SubCategories;
