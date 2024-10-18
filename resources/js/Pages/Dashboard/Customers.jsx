import { DashboardActionContext } from "@/Context/DashboardActionContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";
import { router, useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { Alert, Snackbar } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";

const Customers = () => {
    const { props } = usePage();
    const FormRef = useRef(null);
    const { showForm, setShowForm } = useContext(DashboardActionContext);
    const { data, setData, post, progress } = useForm({
        name: "",
        email: "",
        mobile: "",
    });

    const [toastMessage, setToastMessage] = useState({
        open: false,
        severity: "error",
        message: "",
    });

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
        post("/createCustomers", {
            onSuccess: (page) => {
                setToastMessage({
                    severity: "success",
                    open: true,
                    message: "Customer has been create.",
                });
                setShowForm(false);
            },

            onError: (page) => {
                setToastMessage({
                    severity: "error",
                    open: true,
                    message: "Something is wrong!",
                });
            },
        });
    };

    const handleDeleteCustomer = (id) => {
        router.post(
            "/deleteCustomer",
            { id },
            {
                onSuccess: (page) => {
                    setToastMessage({
                        severity: "success",
                        open: true,
                        message: "Customer has been deleted.",
                    });
                },
            }
        );
    };

    const handleClose = () => {
        setToastMessage((prev) => ({ ...prev, open: false }));
    };

    return (
        <div className="sm:px-6 w-full mt-10">
            <Snackbar
                open={toastMessage.open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={toastMessage.severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {toastMessage.message}
                </Alert>
            </Snackbar>

            {showForm && (
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
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" for="phone">
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="text"
                                        id="phone"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" for="email">
                                        Mobile
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Mobile"
                                        type="number"
                                        id="email"
                                        value={data.mobile}
                                        onChange={(e) =>
                                            setData("mobile", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    onClick={(e) => handleFormSubmit(e)}
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
            <div className="bg-white ">
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            <tr className="">
                                <th className="">Name</th>
                                <th className="">Mobile</th>
                                <th className="">Email</th>
                                <th className="">Action</th>
                            </tr>
                            <div className="mt-5"></div>
                            {props.customers.data.map((invoice, index) => (
                                <>
                                    <tr
                                        key={index}
                                        tabindex="0"
                                        className="focus:outline-none h-16 border border-gray-100 rounded"
                                    >
                                        <td className="">
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                                    {invoice.name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="pl-24">
                                            <div className="flex items-center">
                                                <p className="text-sm leading-none text-gray-600 ml-2">
                                                    {invoice.mobile}
                                                </p>
                                            </div>
                                        </td>

                                        <td className="pl-5">
                                            <div className="flex items-center">
                                                <p className="text-sm leading-none text-gray-600 ml-2">
                                                    {invoice.email}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="pl-4 mr-2">
                                            <button
                                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 rounded hover:bg-gray-200 focus:outline-none"
                                                onClick={() =>
                                                    handleDeleteCustomer(
                                                        invoice.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="h-3"></tr>
                                </>
                            ))}
                        </tbody>
                        <div className="py-10 text-center">
                            {props.customers.links.map((link) =>
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
        </div>
    );
};

Customers.layout = (page) => (
    <DashboardLayout pageName={"Customers"} children={page} />
);
export default Customers;
