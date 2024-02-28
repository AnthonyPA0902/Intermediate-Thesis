import React from "react";
import About from "../components/MainPage/About";
import Traveling from "../components/MainPage/Traveling";
import Tours from "../components/MainPage/Tours";
import OurBlog from "../components/MainPage/OurBlog";

const Main = () => {
    return (
        <div>
            <About />
            <Traveling />
            <Tours />
            <OurBlog />
        </div>
    );
};

export default Main;