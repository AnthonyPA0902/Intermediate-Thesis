import React from "react";

const Details = () => {
    return (
    <section>
        <h1 className="tour-name">PHÚ QUỐC 3 NGÀY 2 ĐÊM</h1>
        <div className="tour-detail-part">
            <div className="tour-details">
                Tour này bao gồm các địa điểm sau :
                <ul>
                    <li>
                        <img className="tour-images" src="/assets/images/vinpearl-land.jpg" alt="Vinpearl Land" />
                        <figcaption>Vinpearl Land</figcaption>
                    </li>
                    <li>
                        <img className="tour-images" src="/assets/images/dao-ngoc.jpg" alt="Đảo Ngọc" />
                        <figcaption>Đảo Ngọc</figcaption>
                    </li>
                    <li>
                        <img className="tour-images" src="/assets/images/nuoi-ngoc-trai.jpg" alt="Cơ Sở Nuôi Trồng và Sản Xuất Ngọc Trai" />
                        <figcaption>Cơ Sở Nuôi Trồng và Sản Xuất Ngọc Trai</figcaption>
                    </li>
                </ul>
            </div>
            <div>
                <div className="tour-infos">
                    <p>Bắt đầu từ 20/02/2024 đến 23/02/2024</p>
                    <p>Giá : 7.400.000 / Người</p>
                    <form>
                        <label>Số người:&nbsp;&nbsp;&nbsp;</label>
                        <input type="number" name="people" /><br />
                    </form>
                    <a href="/checkout"><button type="submit">Đặt Tour</button></a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Details;