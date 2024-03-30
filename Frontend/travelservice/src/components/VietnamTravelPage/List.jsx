import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = ({ searchResults }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        let apiUrl = `https://localhost:7026/api/tour?page=${currentPage}&pageSize=6`;

        if (searchResults) {
            apiUrl = `https://localhost:7026/api/tour/search?searchTerm=${searchResults}`;
            console.log("Api URL:", apiUrl);
        }

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results); 
            setProducts(data.results); 
            setTotalPages(data.totalPages);
        })
        .catch((error) => console.error(error));
    }, [currentPage, searchResults]);


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }; 

    return (
        <div>
            <section id="tour-list">
                {products.map((product) => (
                    <div className="col-md-4 col-sm-6 col-xs-12 tour-item" style={{ marginBottom: 30 }} key={product.id}>
                        <Link to={`/tourdetails?id=${product.id}`} className="card-link"> 
                            <div className="card h-100">
                            <img className="card-img-top" src={`/assets/images/tour/${product.picture}`} alt="Card cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Giá từ: {product.price}</p>
                                    <p className="card-text">Thời gian: {product.duration}</p>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-primary">Chi tiết</button>
                                </div>
                            </div>
                        </Link>
                    </div> 
                ))}
            </section>
            <div style={{paddingLeft: 40}}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Trang Trước</button>
                    <span>{currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Trang Sau</button>
            </div>
        </div>
        
    );
};

export default List;
