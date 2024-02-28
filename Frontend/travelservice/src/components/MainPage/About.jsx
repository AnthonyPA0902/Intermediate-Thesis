import React from "react";

const About = () => {
    return (
        <div id="about" className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage">
                     <h2>AROUND THE WORLD</h2>
                     <span> Mang đến cho các khách hàng những trải nghiệm du lịch tốt nhất</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                     <div className="about-box">
                        <p><span style={{fontWeight: "700"}} >Đại lý du lịch Around The World tự hào là đơn vị hàng đầu tiên 
                        phong trong việc đem đến cho du khách các dịch vụ du lịch từ A đến Z. Khi chọn một trong các tour của 
                        chúng tôi, quý khách sẽ được lo liệu tất cả những dịch vụ khác bao gồm khách sạn, xe di chuyển và chuyến 
                        bay. Around The World tin rằng với loại hình dịch vụ này sẽ đem đến cho quý khách những trải nghiệm tuyệt 
                        vời và các kỉ niệm đáng nhớ</span></p>
                        <div className="palne-img-area">
                           <img src="/assets/images/plane-img.png" alt="images" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default About;
