import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { usePage } from "@inertiajs/react";

// Register the required components with ChartJS
ChartJS.register(
    ArcElement, // Required for pie/doughnut charts
    Tooltip,
    Legend
);

const SalesPieChart = () => {
    const { props } = usePage();
    const pieChartData = {
        labels: props.lastMonthCategoryReport.map((data) => data.name),
        datasets: [
            {
                label: "Top category performance",
                data: props.lastMonthCategoryReport.map((data) => data.price),
                backgroundColor: [
                    "rgb(22, 101, 221)", // Blue
                    "rgb(243, 88, 217)", // Pink
                    "rgb(247, 19, 19)", // Red
                    "rgb(8, 230, 230)", // Cyan
                    "rgb(75, 192, 192)", // Teal
                ],
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="w-auto h-auto">
            <div className="mb-4">
                <h2 className="font-medium text-xl">Category analytics </h2>
            </div>
            <Pie options={options} data={pieChartData} />
        </div>
    );
};

export default SalesPieChart;
