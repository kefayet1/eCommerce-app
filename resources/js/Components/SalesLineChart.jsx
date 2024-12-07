import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { usePage } from "@inertiajs/react";

// Register the required components with ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




const SalesLineChart = () => {
    const { props } = usePage();
    const lineChartData = {
        labels: props.lastWeekSaleReport.map(date => date.weekday),
        datasets: [
            {
                label: "Step 1",
                data: props.lastWeekSaleReport.map(date => date.total_sales),
                borderColor: "rgb(75, 192, 192)",
                tension: 0.4, 
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            // title: {
            //     display: true,
            //     text: "Last 7 days sale",
            //     color: "black",
            //     font: {
            //         size: 18,
            //         colors: "black",
            //         weight: "bold"
            //     }
            // }
        }
    };

    return (
        <div className="w-auto  h-auto">
            <div className="mb-4">
                <h2 className="font-medium text-xl">Last 7 days sales</h2>
            </div>
            <Line options={options} data={lineChartData} />
        </div>
    );
};

export default SalesLineChart;
