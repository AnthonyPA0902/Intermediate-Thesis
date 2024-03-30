import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");

    const [tourDetailWithTourInfo, setTourDetailWithTourInfo] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`https://localhost:7026/api/tour/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data); 
            setTourDetailWithTourInfo(data);
        })
        .catch((error) => console.error(error));
    }, [id]);
    if (!tourDetailWithTourInfo) return <div>Loading...</div>;

    const { tourDetail, tourInfo, images } = tourDetailWithTourInfo;

    return (
        <section>
        <h1 className="tour-name">{tourInfo.name}</h1>
            <div className="tour-detail-part">
            <div className="tour-details">
                Tour này bao gồm các địa điểm sau :
                <ul>
                    {images.map((img) => (
                        <li key={img.id}>
                            <img className="tour-images" src={`/assets/images/tour_details/${img.imageUrl}`} alt={img.imageName} />
                            <figcaption>{img.imageName}</figcaption>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="tour-infos">
                    <p>Mã Tour : {tourDetail.code}</p>
                    <p>Bắt đầu từ {tourDetail.begin_date} đến {tourDetail.end_date}</p>
                    <p>Phương tiện : {tourDetail.transport}</p>
                    <p>Xuất Phát : Từ {tourDetail.start_destination}</p>
                    <p>Giá : {tourInfo.price} đồng</p>
                    <Link to={`/checkout?id=${id}`}><button type="submit">Đặt Tour</button></Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Details;
