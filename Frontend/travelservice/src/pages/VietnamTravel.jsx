import React, { useState } from "react";
import Search from "../components/VietnamTravelPage/Search";
import Filter from "../components/VietnamTravelPage/Filter";
import List from "../components/VietnamTravelPage/List";

const VietnamTravel = () => {
    const [searchResults, setSearchResults] = useState(null);

    const updateSearchResults = (searchTerm) => {
        if (!searchTerm.trim()) {
            setSearchResults(null); 
            return; 
        }
    
        const url = `https://localhost:7026/api/tour/search?searchTerm=${encodeURIComponent(searchTerm)}`;
        console.log("Search URL:", url);
    
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok (status ${response.status})`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Search results:", data.results);
                setSearchResults(searchTerm);
            })
            .catch((error) => console.error('Error fetching search results:', error));
    };
    
    
    return (
        <div>
            <Search updateSearchResults={updateSearchResults} />
            <Filter />
            <List searchResults={searchResults} />
        </div>
    );
};

export default VietnamTravel;
