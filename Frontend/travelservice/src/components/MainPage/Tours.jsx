import React from "react";

const Tours = () => {
    return (
        <div className="Tours">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>CÁC TOUR ĐÁNG CHÚ Ý</h2>
                        </div>
                    </div>
                </div>
                <section id="demos">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <img className="img-responsive" src="/assets/images/London.jpg" alt="London.jpg" />
                                    <h3>London</h3>
                                    <p>Thành phố sương mù về đêm mang đến một vẻ đẹp hiện đại và huyền bí</p>
                                </div>
                                <div className="item">
                                    <img className="img-responsive" src="/assets/images/NewYork.jpg" alt="NewYork.jpg" />
                                    <h3>New York</h3>
                                    <p>Nơi nhịp sống hối hả khiến bạn cảm nhận được từng phút và từng giây trôi qua</p>
                                </div>
                                <div className="item">
                                    <img className="img-responsive" src="/assets/images/Moscow.jpg" alt="Moscow.jpg" />
                                    <h3>Moscow</h3>
                                    <p>Tuyết rơi long lanh và trong trẻo khiến bạn quên đi cái lạnh buốt giá nơi đây</p>
                                </div>
                                <div className="item">
                                    <img className="img-responsive" src="/assets/images/Hawaii.jpg" alt="Hawaii.jpg" />
                                    <h3>Hawaii</h3>
                                    <p>Đến với hòn đảo được ví như thiên đường trên trái đất và tận hưởng bình minh tuyệt đẹp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Tours;
