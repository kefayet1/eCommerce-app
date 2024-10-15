import InvoiceModal from "@/Components/InvoiceModal";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";
const Invoice = () => {
    const { props } = usePage();
    const handleDeleteTable = (id) =>{
        router.post("/deleteInvoice", {id});
    }
    return (
        <div className="sm:px-6 w-full">
            <div className="px-1 py-4 md:py-7">
                <div className="flex items-center justify-between">
                    <p
                        tabindex="0"
                        className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
                    >
                        Invoice
                    </p>
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 hover:bg-gray-300 cursor-pointer rounded"></div>
                </div>
            </div>
            <div className="bg-white ">
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            <tr className="">
                                <th className="">Customer Name</th>
                                <th className="">Mobile</th>
                                <th className="">Total</th>
                                <th className="">Vat</th>
                                <th className="">Payable</th>
                                <th className="">Action</th>
                            </tr>
                            <div className="mt-5"></div>
                            {props.invoices.data.map((invoice, index) => (
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
                                                    {invoice.total}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="pl-5">
                                            <div className="flex items-center">
                                                <p className="text-sm leading-none text-gray-600 ml-2">
                                                    {invoice.vat}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="pl-5">
                                            <div className="flex items-center">
                                                <p className="text-sm leading-none text-gray-600 ml-2">
                                                    {invoice.payable}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="pl-4 mr-2">
                                            <Link
                                                href={`/invoiceModal/${invoice.id}`}
                                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                                            >
                                                View
                                            </Link>

                                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 rounded hover:bg-gray-200 focus:outline-none"
                                            onClick={()=> handleDeleteTable(invoice.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="h-3"></tr>
                                </>
                            ))}
                        </tbody>
                        <div className="py-10 text-center">
                            {props.invoices.links.map((link) =>
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
Invoice.layout = (page) => <DashboardLayout children={page} pageName={""} />;
export default Invoice;
