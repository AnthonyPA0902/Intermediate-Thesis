import React from "react";

const Traveling = () => {
    return (
        <div id="travel" className="traveling">
        <div className="container">
           <div className="row">
              <div className="col-md-12 ">
                 <div className="titlepage">
                    <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
                    <span>Tour của chúng tôi sẽ cung cấp cho các khách hàng những tiện ích tốt nhất và thay đổi linh hoạt.</span> 
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                 <div className="traveling-box">
                    <i><img src="/assets/icons/travel-icon.png" alt="icon"/></i>
                    <h3>Đa Dạng Quốc Gia</h3>
                    <p> Từ các quốc qua phổ biến đến các quốc gia ít được biết đến </p>
                 </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                 <div className="traveling-box">
                    <i><img src="/assets/icons/travel-icon2.png" alt="icon"/></i>
                    <h3>Du Lịch Xuyên Núi</h3>
                    <p> Trải nghiệm việc khám phá thiên nhiên và ngắm nhìn núi rừng một cách an toàn </p>
                 </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                 <div className="traveling-box">
                    <i><img src="/assets/icons/travel-icon3.png" alt="icon"/></i>
                    <h3>Tour Xe Bus</h3>
                    <p> Ngắm cảnh thành phố với những xe bus 2 tầng </p>
                 </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                 <div className="traveling-box">
                    <i><img src="/assets/icons/travel-icon4.png" alt="icon"/></i>
                    <h3>Du Lịch Xuyên Hè</h3>
                    <p> Đắm mình trong 3 tháng không âu lo và đầy vui vẻ </p>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Traveling;