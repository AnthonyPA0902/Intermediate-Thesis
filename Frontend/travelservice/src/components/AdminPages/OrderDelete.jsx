import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const TourDelete = () => {
    const location = useLocation();
    const orderid = new URLSearchParams(location.search).get("id");
    const [order, setOrder] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        fetch(`https://localhost:7026/api/admin/order/delete/${orderid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setOrder(data);
        }).catch((error) => console.error(error));
    }, [orderid]);

    const handleDelete = () => {
        fetch(`https://localhost:7026/api/admin/order/delete/${orderid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            Swal.fire({
                icon: 'success',
                title: 'Xóa đơn hàng thành công',
                showConfirmButton: false,
                timer: 2000 
            }).then(() => {
                window.location.href = "/admin/order";
            });
        })
        .catch((error) => console.error(error));
    };

    return (
        <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-primary">
            <img src="/assets/images/travel-logo.png" style={{ width: "60px", height: "60px" }} alt="logo" />
            <a className="navbar-brand ps-3" style={{ fontWeight: "700" }} href="/admin/dashboard">Around The World</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <Dropdown show={dropdownOpen} onClick={toggleDropdown}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                <i className="fas fa-user fa-fw"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/admin/login">Đăng xuất</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                    <div className="nav">
                            <a className="nav-link" href="/admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Điều Khiển
                            </a>
                            <div className="sb-sidenav-menu-heading">Quản Lý</div>
                            <a className="nav-link" href="/admin/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Khách Hàng
                                </a>
                                <a className="nav-link" href="/admin/employee">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Nhân Viên
                                </a>
                                <a className="nav-link" href="/admin/tour">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Tour
                                </a>
                                <a className="nav-link" href="/admin/tourdetails">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Chi Tiết Tour
                                </a>
                                <a className="nav-link" href="/admin/tourdetailsimage">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Hình Ảnh Tour
                                </a>
                                <a className="nav-link" href="/admin/order">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Đơn Đặt
                                </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content" style={{margin: 20}}>
                <main>
                    <Link to={`/admin/order`}><button className="back-btn">Quay trở lại</button></Link>
                    <h1 className="heading">Kiểm Tra Dữ Liệu Trước Khi Xóa:</h1>
                    <div className="info-table">
                    <div className="info-row">
                        <span className="info-label">Ngày Đặt:</span>
                        <span className="info-value">{order.date}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Mã Khách Hàng:</span>
                        <span className="info-value">{order.customer_id}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Mã Tour:</span>
                        <span className="info-value">{order.tour_id}</span>
                    </div>
                    </div>
                    <div className="button-container">
                    <button className="delete-button" onClick={handleDelete}>Xóa</button>
                    <Link to={`/admin/order`}><button className="cancel-button">Hủy</button></Link>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="/">Privacy Policy</a>
                                &middot;
                                <a href="/">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
    );
}

export default TourDelete;
