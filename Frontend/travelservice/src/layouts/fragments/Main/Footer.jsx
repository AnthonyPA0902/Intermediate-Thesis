import React, { useEffect } from 'react';

const Footer = () => {
   useEffect(() => {
      const loadScript = (src, callback) => {
         const script = document.createElement('script');
         script.src = src;
         script.onload = callback;
         document.head.appendChild(script);
      };

      loadScript('/assets/js/jquery.min.js', () => {
         loadScript('/assets/js/plugin.js', () => {
            loadScript('/assets/js/bootstrap.bundle.min.js', () => {
               loadScript('/assets/js/popper.min.js', () => {
                  loadScript('/assets/js/jquery.mCustomScrollbar.concat.min.js', () => {
                     loadScript('/assets/js/owl.carousel.js', () => {
                     });
                  });
               });
            });
         });
      });
   }, []);

   return (
        <footer>
        <div id="contact" className="footer">
           <div className="container">
              <div className="row pdn-top-30">
                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <ul className="location_icon">
                       <li> <a href="/"><img src="/assets/icons/facebook.png" alt="facebook"/></a></li>
                       <li> <a href="/"><img src="/assets/icons/Twitter.png" alt="twitter"/></a></li>
                       <li> <a href="/"><img src="/assets/icons/linkedin.png" alt="linkedin"/></a></li>
                       <li> <a href="/">/<img src="/assets/icons/instagram.png" alt="instagram"/></a></li>
                    </ul>
                 </div>
                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="Follow">
                       <h3>LIÊN LẠC</h3>
                       <span>62 Mậu Thân <br />An Khánh,<br />
                       Ninh Kiều, Cần Thơ<br />
                       +84 901 384 711</span>
                    </div>
                 </div>
                 <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="Follow">
                       <h3>THÔNG TIN THÊM</h3>
                       <ul className="link">
                          <li> <a href="/">Giới thiệu</a></li>
                          <li> <a href="/">Điều kiện và điều khoản</a></li>
                          <li> <a href="/">Chính sách bảo mật</a></li>
                          <li> <a href="/">Tin tức</a></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="Follow">
                       <h3>PHẢN HỒI</h3>
                       <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                             <input className="Newsletter" placeholder="Họ Tên" type="text" />
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                             <input className="Newsletter" placeholder="Email" type="text" />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                             <textarea className="textarea" placeholder="Chú thích" type="text" defaultValue={Comment}></textarea>
                          </div>
                       </div>
                       <button className="Subscribe">Gửi</button>
                    </div>
                 </div>
              </div>
              <div className="copyright">
                 <div className="container">
                    <p>Copyright 2024 Bản Quyền Thuộc về PA Entertainment</p>
                 </div>
              </div>
           </div>
        </div>
     </footer>
    );
};

export default Footer;