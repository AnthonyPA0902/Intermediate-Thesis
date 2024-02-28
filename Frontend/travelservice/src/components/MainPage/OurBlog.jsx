import React from "react";

const OurBlog = () => {
    return (
        <div id="blog" className="blog">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Blog Du Lịch</h2>
                            <span>Nơi các khách hàng chia sẻ các câu chuyện và đánh giá khi tham quan tour của chúng tôi</span> 
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="blog-box">
                            <figure><img src="/assets/images/blog-image0.jpg" alt="/"/>
                                <span>04/02/2024</span>
                            </figure>
                            <div className="travel">
                                <span>Người đăng:  Phước An</span> 
                                <p><strong className="Comment">07</strong> Bình Luận</p>
                                <p><strong className="like">56 </strong> Like</p>
                            </div>
                            <h3>Tour Du Lịch Hawaii</h3>
                            <p>Chúng tôi đã có một khoảng thời gian tuyệt với ngắm nhìn hoàng hôn và bơi lặng dưới làn nước trong xanh cùng bầy cá</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="blog-box">
                            <figure><img src="/assets/images/blog-image.jpg" alt="/"/>
                                <span>20/04/2024</span>
                            </figure>
                            <div className="travel">
                                <span>Người đăng:  Linda Kiều</span> 
                                <p><strong className="Comment">01</strong> Bình Luận</p>
                                <p><strong className="like">25</strong> Like</p>
                            </div>
                            <h3>Tour Du Lịch Hà Giang</h3>
                            <p>Một trải nghiệm không thể nào quên khi nhìn thấy người mẹ dân tộc tần tảo nuôi con trên đỉnh núi mù sương</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default OurBlog;