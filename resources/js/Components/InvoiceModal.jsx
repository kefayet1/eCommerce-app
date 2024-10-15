
const InvoiceModal = () => {

    return (
        <div>
            <div className="top">
                <div className="flex justify-between mb-2">
                    <div className="leftTop">
                        <div className="topLeft">
                            <b>BELLED TO</b>
                            <div className="">
                                <span>Name: </span>
                                <span></span>
                            </div>
                            <div className="">
                                <span>Email: </span>
                                <span></span>
                            </div>
                            <div className="">User Id:</div>
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
                            2023-08-13
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
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        {bills[0]?.product.map((prod) => (
                                            <tr key={prod.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {prod.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.unit}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.price}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {prod.totalPrice}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                        onClick={() =>
                                                            dispatch(
                                                                removeProduct(
                                                                    prod.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="low mt-10">
                <div className="totalSeleInfo mt-5">
                    <p>
                        <b>TOTAL: </b>
                    </p>
                    <p>
                        <b>PAYABLE:</b>
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
                        onClick={() => setShowProductModal(!showProductModal)}
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
