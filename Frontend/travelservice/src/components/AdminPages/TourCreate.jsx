import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const TourCreate = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        duration: '',
        picture: '',
        category_id: '',
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://localhost:7026/api/admin/tour/create', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                } else {
                    console.error('Failed to fetch categories');
                }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

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

        if (!formData.price) {
            newErrors.price = 'Giá cả không được để trống';
        }

        if (!formData.duration) {
            newErrors.duration = 'Thời gian không được để trống';
        }

        if (!formData.picture) {
            newErrors.picture = 'Tour phải có hình ảnh chính thức';
        }

        if (!formData.category_id) {
            newErrors.category_id = 'Vui lòng chọn loại cho tour';
        }

        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            try {
                const response = await fetch('https://localhost:7026/api/admin/tour/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    navigate("/admin/tour");
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
                        <Link to={`/admin/tour`}><button className="back-button">Quay trở lại</button></Link>
                        <form onSubmit={handleSubmit} className="create-employee-form">
                            <h2 className="form-title">Tạo Tour Của Bạn</h2>
                            <div className="form-group">
                                <label htmlFor="name">Tên Tour</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                                {error.name && <div className="error-message">{error.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá Cả</label>
                                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
                                {error.price && <div className="error-message">{error.price}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="duration">Thời Gian</label>
                                <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} />
                                {error.duration && <div className="error-message">{error.duration}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="picture">Hình Ảnh</label>
                                <input type="text" id="picture" name="picture" value={formData.picture} onChange={handleChange} />
                                {error.picture && <div className="text-danger">{error.picture}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="category_id">Loại Tour</label>
                                <select id="category_id" name="category_id" value={formData.category_id} onChange={handleChange}>
                                    <option value="">Chọn loại tour</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                                {error.category_id && <div className="text-danger">{error.category_id}</div>}
                            </div>
                            <div className="button-container">
                                <button className="create-button">Thêm</button>
                                <Link to={`/admin/tour`}><button className="cancel-button">Hủy</button></Link>
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

export default TourCreate;
