import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [customerName, setCustomerName] = useState(null);
    const [customerId, setCustomerId] = useState(null); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                setCustomerId(decodedToken.customer_id);
                setCustomerName(decodedToken.customer_name);
            }
        }
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    };

    const tokenExist = () => {
        const token = localStorage.getItem("token");
        return token ? 1 : 0;
    };

    const decodeToken = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        } catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    };

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
                                            <span style={{fontWeight: 600, color: "black"}}>Xin chào, {customerName}</span>
                                            <li><Link to={`/userinfo?id=${customerId}`}><img src="/assets/images/user-profile.png" alt="3.png"/>Hồ Sơ</Link></li>
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
