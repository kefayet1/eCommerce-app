import { DashboardActionContext } from "@/Context/DashboardActionContext";
import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { useContext, useEffect } from "react";

const Overview = () => {
    const { a, b, showForm, setShowForm } = useContext(DashboardActionContext);
    useEffect(()=>{
        return setShowForm(false);
    },[]);
    return <div>Overview</div>;
};
Overview.layout = (page) => <DashboardLayout children={page} />;
export default Overview;
