import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const EmployeeCreate = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        address: '',
        phone: '',
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Tên không được để trống';
        }

        const currentDate = new Date();
        const Dob = new Date(formData.dob)
        if (Dob >= currentDate) {
            newErrors.dob = 'Ngày Sinh Phải Ở Quá Khứ';
        }

        if (!formData.address) {
            newErrors.address = 'Địa chỉ không được để trống';
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại phải có 10 số';
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        } else if (formData.email.length < 10 || formData.email.length > 50) {
            newErrors.email = 'Email phải từ 10 đến 50 ký tự';
        }

        if (!formData.username) {
            newErrors.username = 'Tên tài khoản không được để trống';
        }

        if (!formData.password) {
            newErrors.password = 'Mật khẩu không được để trống';
        }

        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            try {
                const response = await fetch('https://localhost:7026/api/admin/employee/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    navigate("/admin/employee");
                    console.log("Register successful");
                } else {
                    console.error("Register failed");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
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
                <div id="layoutSidenav_content">
                    <main>
                        <Link to={`/admin/employee`}><button className="back-button">Quay trở lại</button></Link>
                        <form onSubmit={handleSubmit} className="create-employee-form">
                            <h2 className="form-title">Tạo Nhân Viên Của Bạn</h2>
                            <div className="form-group">
                                <label htmlFor="name">Họ Tên</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                                {error.name && <div className="error-message">{error.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Ngày Sinh</label>
                                <input type="date" id="birthday" name="dob" value={formData.dob} onChange={handleChange} />
                                {error.dob && <div className="error-message">{error.dob}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa Chỉ</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                                {error.address && <div className="error-message">{error.address}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Số Điện Thoại</label>
                                <input type="tel" id="telephone" name="phone" value={formData.phone} onChange={handleChange} />
                                {error.phone && <div className="text-danger">{error.phone}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                                {error.email && <div className="text-danger">{error.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Tài Khoản</label>
                                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                                {error.username && <div className="text-danger">{error.username}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mật Khẩu</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                                {error.password && <div className="text-danger">{error.password}</div>}
                            </div>
                            <div className="button-container">
                                <button className="create-button">Thêm</button>
                                <Link to={`/admin/employee`}><button className="cancel-button">Hủy</button></Link>
                            </div>
                        </form>
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

export default EmployeeCreate;
