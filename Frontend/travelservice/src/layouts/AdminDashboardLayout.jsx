import React from "react";
import Header from "./fragments/Admin/Dashboard/Header";

function AdminDashboardLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                { children }
            </div>
        </div>
    );
};

export default AdminDashboardLayout;