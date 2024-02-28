import React from 'react';

const AdminLogin = () => {
    return (
        <section className="vh-100" style={{ backgroundColor: 'cadetblue' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{ borderRadius: '1rem' }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <img src="/assets/images/travel-logo.png" style={{ width: '90px', height: '90px' }} alt="travel-pic" />
                                            <span className="h3">ADMIN DASHBOARD</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Đăng Nhập Vào Tài Khoản Quản Lý</h5>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <input type="email" id="username" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Mật Khẩu</label>
                                            <input type="password" id="password" className="form-control form-control-lg" />
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <a href="/admin/dashboard"><button className="btn btn-primary btn-lg btn-block" type="button">Đăng Nhập</button></a>
                                        </div>
                                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Bạn là Khách Hàng? <a href="/" style={{ color: 'darkgoldenrod' }}>Về Trang Chủ</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default AdminLogin;
