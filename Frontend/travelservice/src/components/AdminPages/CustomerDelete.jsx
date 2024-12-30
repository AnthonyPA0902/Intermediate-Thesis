import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link,useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const CustomerDelete = () => {
    const location = useLocation();
    const customerid = new URLSearchParams(location.search).get("id");
    const [customer, setCustomer] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        fetch(`https://localhost:7026/api/admin/customer/delete/${customerid}`, {
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
            setCustomer(data);
        }).catch((error) => console.error(error));
    }, [customerid]);

    const handleDelete = () => {
        fetch(`https://localhost:7026/api/admin/customer/delete/${customerid}`, {
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
                title: 'Xóa khách hàng thành công',
                showConfirmButton: false,
                timer: 2000 
            }).then(() => {
                window.location.href = "/admin/customer";
            });
        })
        .catch((error) => console.error(error));
    };

    return (
        <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-primary">
            <img src="/assets/images/travel-logo.png" style={{ width: "60px", height: "60px" }} alt="logo" />
            <a className="navbar-brand ps-3" style={{ fontWeight: "700" }} href="/admin/dashboard">Around The World</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
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
                    <Link to={`/admin/customer`}><button className="back-btn">Quay trở lại</button></Link>
                    <h1 className="heading">Kiểm Tra Dữ Liệu Trước Khi Xóa:</h1>
                    <div className="info-table">
                    <div className="info-row">
                        <span className="info-label">Tên:</span>
                        <span className="info-value">{customer.name}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{customer.email}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">UserName:</span>
                        <span className="info-value">{customer.username}</span>
                    </div>
                    </div>
                    <div className="button-container">
                    <button className="delete-button" onClick={handleDelete}>Xóa</button>
                    <Link to={`/admin/customer`}><button className="cancel-button">Hủy</button></Link>
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

export default CustomerDelete;
