import React from "react";
import Header from "./fragments/Authentication/Header";

function AuthLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                { children }
            </div>
        </div>
    );
};

export default AuthLayout;