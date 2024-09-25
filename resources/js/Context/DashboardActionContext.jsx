import React, { createContext, useState } from "react";
export const DashboardActionContext = createContext();
export const DashboardActionContextProvider = ({ children }) => {
    const [showSidebar, setShowSideBar] = useState(false);
    return (
        <DashboardActionContext.Provider
            value={{ showSidebar, setShowSideBar }}
        >
            {children}
        </DashboardActionContext.Provider>
    );
};

