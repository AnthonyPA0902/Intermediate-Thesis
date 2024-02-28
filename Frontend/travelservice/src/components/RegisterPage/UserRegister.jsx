import React from "react";

const UserRegister = () => {
    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">
                                    <div className="text-center">
                                        <a href="/"><img src="/assets/images/travel-logo.png" style={{ width: '185px' }} alt="travel-pic" /></a>
                                    </div>
                                    <form>
                                        <p>Hãy Tạo Tài Khoản Của Bạn</p>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="name">Họ Tên</label>
                                            <input type="text" id="name" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="birthday">Ngày Sinh</label>
                                            <input type="date" id="birthday" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="adresss">Địa Chỉ</label>
                                            <input type="text" id="adresss" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="telephone">Số Điện Thoại</label>
                                            <input type="tel" id="telephone" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="username">Tài Khoản</label>
                                            <input type="email" id="username" className="form-control" placeholder="Phone number or email address" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Mật Khẩu</label>
                                            <input type="password" id="password" className="form-control" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Đã Có Tài Khoản?</p>&nbsp;&nbsp;
                                            <a href="/login"><button type="button" className="btn btn-outline-danger">Đăng Nhập</button></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <img src="/assets/images/register-image.jpg" style={{ width: '460px', height: '650px', padding: '35px' }} alt="register" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default UserRegister;