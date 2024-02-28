import React from "react";
import Search from "../components/AbroadTravelPage/Search";
import Filter from "../components/AbroadTravelPage/Filter";
import List from "../components/AbroadTravelPage/List";

const AbroadTravel = () => {
    return (
        <div>
            <Search />
            <Filter />
            <List />
        </div>
    );
};

export default AbroadTravel;