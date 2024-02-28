import React from "react";
import Header from "./fragments/Admin/Login/Header";

function AdminLoginLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                { children }
            </div>
        </div>
    );
};

export default AdminLoginLayout;