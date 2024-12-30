import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from "react-router-dom";

const TourDetailsEdit = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [tours, setTours] = useState([]);
    const location = useLocation();
    const tourdetailsid = new URLSearchParams(location.search).get("id");

    const [tourDetails, setTourDetails] = useState(null); 

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        code: '',
        begin_date: '',
        end_date: '',
        transport: '',
        start_destination: '',
        tour_id: '',
    });

    const fetchTours = async () => {
        try {
            const response = await fetch('https://localhost:7026/api/admin/tourdetails/edit', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setTours(data);
                } else {
                    console.error('Failed to fetch tours');
                }
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    useEffect(() => {
        const fetchTourDetailsData = async () => {
            try {
                const response = await fetch(`https://localhost:7026/api/admin/tourdetails/edit/${tourdetailsid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const tourdetailsData = await response.json();
                    setTourDetails(tourdetailsData); 
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTourDetailsData();
    }, [tourdetailsid]);

    useEffect(() => {
        if (tourDetails) {
            setFormData({
                code: tourDetails.code,
                begin_date: tourDetails.begin_date,
                end_date: tourDetails.end_date,
                transport: tourDetails.transport,
                start_destination: tourDetails.start_destination,
                tour_id: tourDetails.tour_id,
            });
        }
    }, [tourDetails]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.code) {
            newErrors.code = 'Mã tour không được để trống';
        }

        const currentDate = new Date();
        const BeginDate = new Date(formData.begin_date)
        if (BeginDate < currentDate) {
            newErrors.begin_date = 'Ngày bắt đầu phải ở tương lai';
        }

        const EndDate = new Date(formData.end_date)
        if (EndDate < currentDate) {
            newErrors.end_date = 'Ngày kết thúc phải ở tương lai';
        }

        if (!formData.transport) {
            newErrors.transport = 'Tour phải có phương tiện di chuyển';
        }

        if (!formData.start_destination) {
            newErrors.start_destination = 'Tour phải có địa điểm khởi hành';
        }

        if (!formData.tour_id) {
            newErrors.tour_id = 'Vui lòng chọn tour của chi tiết';
        }

        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            try {
                const response = await fetch(`https://localhost:7026/api/admin/tourdetails/edit/${tourdetailsid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    navigate("/admin/tourdetails");
                    console.log("Edit successful");
                } else {
                    console.error("Edit failed");
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
                        <Link to={`/admin/tourdetails`}><button className="back-button">Quay trở lại</button></Link>
                        <form onSubmit={handleSubmit} className="create-employee-form">
                            <h2 className="form-title">Cập Nhật Tour Của Bạn</h2>
                            <div className="form-group">
                                <label htmlFor="name">Mã Tour</label>
                                <input type="text" id="code" name="code" value={formData.code} onChange={handleChange} />
                                {error.code && <div className="error-message">{error.code}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="begin_date">Ngày Bắt Đầu</label>
                                <input type="date" id="begin_date" name="begin_date" value={formData.begin_date} onChange={handleChange} />
                                {error.begin_date && <div className="error-message">{error.begin_date}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="end_date">Ngày Kết Thúc</label>
                                <input type="date" id="end_date" name="end_date" value={formData.end_date} onChange={handleChange} />
                                {error.end_date && <div className="error-message">{error.end_date}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="transport">Phương Tiện Di Chuyển</label>
                                <input type="text" id="transport" name="transport" value={formData.transport} onChange={handleChange} />
                                {error.transport && <div className="text-danger">{error.transport}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="start_destination">Địa Điểm Khởi Hành</label>
                                <input type="text" id="start_destination" name="start_destination" value={formData.start_destination} onChange={handleChange} />
                                {error.start_destination && <div className="text-danger">{error.start_destination}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="tour_id">Tour</label>
                                <select id="tour_id" name="tour_id" value={formData.tour_id} onChange={handleChange}>
                                    <option value="">Chọn tour</option>
                                    {tours.map(tour => (
                                        <option key={tour.id} value={tour.id}>{tour.name}</option>
                                    ))}
                                </select>
                                {error.tour_id && <div className="text-danger">{error.tour_id}</div>}
                            </div>
                            <div className="button-container">
                                <button className="create-button">Cập Nhật</button>
                                <Link to={`/admin/tourdetails`}><button className="cancel-button">Hủy</button></Link>
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

export default TourDetailsEdit;
