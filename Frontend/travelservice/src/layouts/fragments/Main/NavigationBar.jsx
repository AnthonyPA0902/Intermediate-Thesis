import React from 'react';

const NavigationBar = () => {

    const handleLogout = function() {
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const tokenExist = function() {
        const token = localStorage.getItem("token");
        return token ? 1 : 0;
    }

    if (tokenExist() === 1) {
        return (
            <header>
                <div className="header">
                    <div className="header_white_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header_information">
                                        <ul>
                                            <li><a href="user-info.html"><img src="/assets/images/user-profile.png" alt="3.png"/>Hồ Sơ</a></li>
                                            <li><a href="/" onClick={handleLogout}><img src="/assets/images/logout.png" alt="3.png"/>Đăng Xuất</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo"> 
                                            <a href="/">
                                                <img src="/assets/images/travel-logo.png" style={{ width: '100px', height: '90px' }} alt="travel-logo.png"/>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li><a href="/">Trang Chủ</a> </li>
                                                <li><a href="/vietnamtravel">Du Lịch Trong Nước</a> </li>
                                                <li><a href="/abroadtravel">Du Lịch Ngoài Nước</a></li>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Thông Tin</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    else {
        return (
            <header>
                <div className="header">
                    <div className="header_white_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header_information">
                                        <ul>
                                            <li><a href="/login"><img src="/assets/images/login.png" alt="3.png"/>Đăng Nhập</a></li>
                                            <li><a href="/register"><img src="/assets/images/register.png" alt="3.png"/>Đăng Ký</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo"> 
                                            <a href="/">
                                                <img src="/assets/images/travel-logo.png" style={{ width: '100px', height: '90px' }} alt="travel-logo.png"/>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li><a href="/">Trang Chủ</a> </li>
                                                <li><a href="/vietnamtravel">Du Lịch Trong Nước</a> </li>
                                                <li><a href="/abroadtravel">Du Lịch Ngoài Nước</a></li>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Thông Tin</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );

    }
};

export default NavigationBar;
