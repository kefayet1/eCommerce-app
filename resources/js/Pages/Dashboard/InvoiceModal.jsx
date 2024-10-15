import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { useRef } from "react";
import Modal from "@/Components/InvoiceModal";
import { usePage } from "@inertiajs/react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

const InvoiceModal = () => {
    const { props, url } = usePage();
    const queryParams = new URLSearchParams(url.split("/")[2]);
    const pdfRef = useRef();

    // const downloadPDF = () => {
    //     const input = pdfRef.current;
    //     html2canvas(input).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/png");
    //         const pdf = new jsPDF('p', 'mm', 'a4', true);
    //         const pdfWidth = pdf.internal.pageSize.getWidth();
    //         const pdfHeight = pdf.internal.pageSize.getHeight();
    //         const imgWidth = canvas.width;
    //         const imgHeight = canvas.height;
    //         const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    //         const imgX = (pdfWidth - imgWidth * ratio) / 2;
    //         const imgY = 30;
    //         pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight);
    //         pdf.save('invoice.pdf')
    //     });
    // };

    return (
        <div ref={pdfRef}>
            <div className="top">
                <div className="flex justify-between mb-2">
                    <div className="leftTop">
                        <div className="topLeft">
                            <b>BELLED TO</b>
                            <div className="">
                                <span>Name: {props.invoice.name}</span>
                                <span></span>
                            </div>
                            <div className="">
                                <span>Email: {props.invoice.email}</span>
                                <span></span>
                            </div>
                            <div className="">
                                User Id: {props.invoice.customer_id}
                            </div>
                        </div>
                    </div>
                    <div className="rightTo">
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="">
                            <b>Invoice</b>
                        </div>
                        <div className="">
                            <p>Date</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Qty
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.products.map((prod) => (
                                            <tr
                                                key={prod.id}
                                                className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {prod.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.qty}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.price}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.sale_price}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="low mt-10">
                <div className="totalSeleInfo mt-5">
                    <p>
                        <b>TOTAL: {props.invoice.payable}</b>
                    </p>
                    <p>
                        <b>PAYABLE: {props.invoice.total}</b>
                    </p>
                    <p>
                        <b>DISCOUNT: %{props.invoice.discount}</b>
                    </p>
                    <p>
                        <b>VAT: %5</b>
                    </p>
                </div>
            </div>

            <div className="bottom flex justify-end">
                <div className="flex gap-1">
                    <button
                        type="button"
                        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        // onClick={downloadPDF}
                    >
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
};

InvoiceModal.layout = (page) => <DashboardLayout children={page} />;

export default InvoiceModal;
