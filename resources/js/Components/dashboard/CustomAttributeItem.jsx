import { DashboardActionContext } from "@/Context/DashboardActionContext";
import { router, useForm } from "@inertiajs/react";
import { FormControlLabel, Switch } from "@mui/material";
import IosSwitchMaterialUi from "ios-switch-material-ui";
import { useEffect, useRef, useState } from "react";

const CustomAttributeItem = ({ attribute }) => {
    const FormRef = useRef(null);
    const [showEditForm, setShowEditForm] = useState(false);
    const [name, setName] = useState("");
    const [toggle, setToggle] = useState(false);
    const handleDelete = (e, id) => {
        e.preventDefault();
        router.post("/deleteAttribute", { id });
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
        setName(attribute.name);
    };

    const handleEditSubmitForm = (e) => {
        e.preventDefault();
        router.post("/editAttribute", {
            id: attribute.id,
            name: name,
            active: toggle,
        });
        setShowEditForm(false);
    };

    const handleToggleActive = (id, active) => {
        router.post("/toggleAttributeActive", { id, active });
    };

    return (
        <>
            {showEditForm && (
                <div className="w-full h-screen flex justify-center bg-[#11111194] absolute top-0 left-0 z-50">
                    <div
                        className="flex justify-center w-[16rem] h-60  bg-white lg:ml-20 mt-40 rounded-md"
                        ref={FormRef}
                    >
                        <form
                            action=""
                            className="flex items-center gap-5"
                            onSubmit={handleEditSubmitForm}
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
                                    <div className="md:col-span-5 flex flex-col">
                                        <label for="full_name">
                                            Brand Name
                                        </label>
                                        <Switch
                                            defaultChecked={attribute.active}
                                            onChange={(e, value) =>
                                                setToggle(value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="inline-flex items-center justify-center h-10 px-3 py-1 mt-5 text-sm font-medium leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                        data-rounded="rounded-md"
                                        data-primary="blue-600"
                                        data-primary-reset="{}"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
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
                            {attribute.name}
                        </p>
                    </div>
                </td>

                <td className="pl-5">
                    <FormControlLabel
                        control={<Switch defaultChecked={attribute.active} onChange={()=> handleToggleActive(attribute.id, attribute.active)}/>}
                    />
                </td>
                <td className="pl-5">
                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700  rounded">
                        {new Date(attribute.created_at).toLocaleString()}
                    </button>
                </td>
                <td className="pl-4">
                    <button
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none mr-2"
                        onClick={() => handleEdit(attribute.id)}
                    >
                        Edit
                    </button>

                    <button
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-bold leading-none text-red-600 py-3 px-5  rounded hover:bg-gray-200 focus:outline-none"
                        onClick={(e) => handleDelete(e, attribute.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default CustomAttributeItem;
