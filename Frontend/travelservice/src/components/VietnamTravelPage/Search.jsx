import React, { useState } from "react";

const Search = ({ updateSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = (event) => {
        event.preventDefault(); 
        updateSearchResults(searchTerm, minPrice, maxPrice);
    };

    return (
        <section>
            <div className="banner-main">
                <img src="/assets/images/floating-market.png" alt="floating-market"/>
                <div className="container">
                    <div className="text-bg">
                        <h1>Travel<br/><strong className="white">In Vietnam</strong></h1>
                        <div className="container">
                        <form className="main-form" onSubmit={handleSearch}>
                                <h3>Find Your Tour</h3>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <label>Tour Name</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Enter tour name"
                                                    type="text"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <label>Min Price</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Enter min price"
                                                    type="number"
                                                    value={minPrice}
                                                    onChange={(e) => setMinPrice(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <label>Max Price</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Enter max price"
                                                    type="number"
                                                    value={maxPrice}
                                                    onChange={(e) => setMaxPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                        <button type="submit">Search Tour</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;