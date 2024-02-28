import React from "react";

const Search = () => {
    return (
        <section>
        <div className="banner-main">
            <img src="/assets/images/ayers-rock.jpg" alt="ayers-rock"/>
            <div className="container">
                <div className="text-bg">
                    <h1>Travel<br/><strong className="white">Around The World</strong></h1>
                    <div className="container">
                        <form className="main-form">
                            <h3>Find Your Tour</h3>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>Tour Name</label>
                                            <input className="form-control" placeholder="" type="text" name="Name"/>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>From</label>
                                            <input className="form-control" placeholder="" type="date" name="From"/>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>To</label>
                                            <input className="form-control" placeholder="" type="date" name="To"/>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>Min Price</label>
                                            <input className="form-control" placeholder="" type="number" name="Min"/>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>Max Price</label>
                                            <input className="form-control" placeholder="" type="number" name="Max"/>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <label>Duration</label>
                                            <input className="form-control" placeholder="" type="text" name="Duration"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                    <button type="button">Search</button>
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