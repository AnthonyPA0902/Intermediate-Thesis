import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const MainDashboard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

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
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Điều Khiển
                            </a>
                            <div className="sb-sidenav-menu-heading">Quản Lý</div>
                                <a className="nav-link" href="/admin/dashboard/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Nhân Viên
                                </a>
                                <a className="nav-link" href="/admin/dashboard/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Khách Hàng
                                </a>
                                <a className="nav-link" href="/admin/dashboard/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Tour
                                </a>
                            <div className="sb-sidenav-menu-heading">Thống Kê</div>
                                <a className="nav-link" href="/admin/dashboard/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Doanh Thu
                                </a>
                                <a className="nav-link" href="/admin/dashboard/customer">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Số Lượng Khách Hàng
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Đăng Nhập Bởi:</div>
                        Nguyễn Phước An
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container mt-4">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="searchInput" placeholder="Search..." />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" id="filterSelect">
                                    <option value="">Filter by...</option>
                                    <option value="1">ID</option>
                                    <option value="2">Name</option>
                                    <option value="3">Age</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered">
                                    <thead className="table-header">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td>John Doe</td>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jane Smith</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Bob Johnson</td>
                                            <td>40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

export default MainDashboard;
