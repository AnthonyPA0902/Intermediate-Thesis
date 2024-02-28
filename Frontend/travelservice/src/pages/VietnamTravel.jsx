import React from "react";
import Search from "../components/VietnamTravelPage/Search";
import Filter from "../components/VietnamTravelPage/Filter";
import List from "../components/VietnamTravelPage/List";

const VietnamTravel = () => {
    return (
        <div>
            <Search />
            <Filter />
            <List />
        </div>
    );
};

export default VietnamTravel;