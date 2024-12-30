import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminTourDetailsImage = () => {
    const [tourDetailsImage, setTourDetailsImage] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        fetch(`https://localhost:7026/api/admin/tourdetailsimage?page=${currentPage}&pageSize=6`, {
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
            console.log(data.results);
            setTourDetailsImage(data.results);
            setTotalPages(data.totalPages);
        }).catch((error) => console.error(error));
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
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
            <div id="layoutSidenav_content">
                <main>
                    <div className="container mt-4">
                        <div className="row mb-3">
                            <div className="col-md-4">
                            </div>
                            <div style={{marginTop: '20px', marginBottom: '10px'}}>
                            <h1>QUẢN LÝ HÌNH ẢNH TOUR</h1>
                                <a href="/admin/tourdetailsimage/create"><button type="button">THÊM MỚI</button></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered">    
                                    <thead className="table-header" style={{backgroundColor: "red"}}>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">URL</th>
                                            <th scope="col">Tour Details ID</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableBody">
                                    {tourDetailsImage.map((ti, index) => (
                                        <tr key={index}>
                                            <td>{ti.id}</td>
                                            <td>{ti.name}</td>
                                            <td>{ti.url}</td>
                                            <td>{ti.tour_details_id}</td>
                                            <td>
                                                <Link to={`/admin/tourdetailsimage/edit?id=${ti.id}`}><img src='/admin_assets/assets/img/edit-icon.png' alt="icon button"></img></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link to={`/admin/tourdetailsimage/delete?id=${ti.id}`}><img src='/admin_assets/assets/img/delete-icon.png' alt="icon button"></img></Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{paddingLeft: 40}}>
                            <button onClick={handlePrevPage} disabled={currentPage === 1}>Trang Trước</button>
                            <span>&nbsp;&nbsp;&nbsp;{currentPage} of {totalPages}&nbsp;&nbsp;&nbsp;</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Trang Sau</button>
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

export default AdminTourDetailsImage;
