import React, { createContext, useState } from "react";
export const DashboardActionContext = createContext();
export const DashboardActionContextProvider = ({ children }) => {
    const [showSidebar, setShowSideBar] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [itemId, setItemId] = useState(null);
    return (
        <DashboardActionContext.Provider
            value={{
                showSidebar,
                setShowSideBar,
                showForm,
                setShowForm,
                itemId,
                setItemId,
            }}
        >
            {children}
        </DashboardActionContext.Provider>
    );
};
