import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminTour = () => {
    const [tour, setTour] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        fetch(`https://localhost:7026/api/admin/tour?page=${currentPage}&pageSize=6`, {
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
            setTour(data.results);
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
                                <a href="/admin/tour/create"><button type="button">THÊM MỚI</button></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered">    
                                    <thead className="table-header" style={{backgroundColor: "green"}}>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Picture</th>
                                            <th scope="col">Category Id</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableBody">
                                    {tour.map((t, index) => (
                                        <tr key={index}>
                                            <td>{t.id}</td>
                                            <td>{t.name}</td>
                                            <td>{t.price}</td>
                                            <td>{t.duration}</td>
                                            <td>{t.picture}</td>
                                            <td>{t.category_id}</td>
                                            <td>
                                                <Link to={`/admin/tour/edit?id=${t.id}`}><img src='/admin_assets/assets/img/edit-icon.png' alt="icon button"></img></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Link to={`/admin/tour/delete?id=${t.id}`}><img src='/admin_assets/assets/img/delete-icon.png' alt="icon button"></img></Link>
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

export default AdminTour;