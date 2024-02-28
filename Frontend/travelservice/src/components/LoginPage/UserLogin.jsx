import React from 'react';

const Login = () => {
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
                                            <a href="/"><img src="/assets/images/travel-logo.png" style={{ width: '185px' }} alt="logo" /></a>
                                        </div>
                                        <form>
                                            <p>Hãy Đăng Nhập Vào Tài Khoản Của Bạn</p>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="username">Tài Khoản</label>
                                                <input type="email" id="username" className="form-control" placeholder="Phone number or email address" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="password">Mật Khẩu</label>
                                                <input type="password" id="password" className="form-control" />
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <a href="/"><button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Đăng Nhập</button></a>
                                                <a className="text-muted" href="/forget">Quên Mật Khẩu?</a>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Không Có Tài Khoản?</p>&nbsp;&nbsp;
                                                <a href="/register"><button type="button" className="btn btn-outline-danger">Tạo Mới</button></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <img src="/assets/images/login-image.jpg" style={{ width: '450px', height: '650px', padding: '30px' }} alt="login-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
