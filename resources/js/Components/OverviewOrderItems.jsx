import { Chip } from "@mui/material";
import React from "react";

const OverviewOrderItems = ({ data }) => {
    return (
        <tr class="bg-white border-b">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {data.name}
            </th>
            <td class="px-6 py-4">
                {data.delivery_status === "pending" ? (
                    <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                        <svg
                            width="5"
                            height="6"
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="#D97706"
                            ></circle>
                        </svg>
                        <span className="font-medium text-xs text-amber-600 ">
                            Pending
                        </span>
                    </div>
                ) : (
                    <div className="py-1.5 px-2.5 bg-purple-50 rounded-full flex items-center justify-center w-20 gap-1">
                        <svg
                            width="5"
                            height="6"
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="#D97706"
                            ></circle>
                        </svg>
                        <span className="font-medium text-xs text-purple-600 ">
                            Completed
                        </span>
                    </div>
                )}
            </td>
            <td class="px-6 py-4">
            {data.payment_status === "pending" ? (
                    <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                        <svg
                            width="5"
                            height="6"
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="#D97706"
                            ></circle>
                        </svg>
                        <span className="font-medium text-xs text-amber-600 ">
                            Pending
                        </span>
                    </div>
                ) : (
                    <div className="py-1.5 px-2.5 bg-purple-50 rounded-full flex items-center justify-center w-20 gap-1">
                        <svg
                            width="5"
                            height="6"
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="#D97706"
                            ></circle>
                        </svg>
                        <span className="font-medium text-xs text-purple-600 ">
                            Completed
                        </span>
                    </div>
                )}
            </td>
            <td class="px-6 py-4">{data.payable} tk</td>
        </tr>
    );
};

export default OverviewOrderItems;
