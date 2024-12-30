import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";


const Profile = () => {
    const location = useLocation();
    const customerId = new URLSearchParams(location.search).get("id");
    const [orderWithTourInfo, setorderWithTourInfo] = useState(null);
    const [activeSection, setActiveSection] = useState('profile');
    const [customerName, setCustomerName] = useState(null);
    const [customerDob, setCustomerDob] = useState(null); 
    const [customerAddress, setCustomerAddress] = useState(null);
    const [customerPhone, setCustomerPhone] = useState(null); 
    const [customerEmail, setCustomerEmail] = useState(null);
    const [customerUsername, setCustomerUsername] = useState(null); 

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleNavLinkClick = (targetId) => {
        setActiveSection(targetId);
    };

    useEffect(() => {
        if (!customerId) return;

        fetch(`https://localhost:7026/api/userinfo/${customerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setorderWithTourInfo(data);
        }).catch((error) => console.error(error));

        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                setCustomerName(decodedToken.customer_name);
                setCustomerDob(decodedToken.customer_dob);
                setCustomerAddress(decodedToken.customer_address);
                setCustomerPhone(decodedToken.customer_phone);
                setCustomerEmail(decodedToken.customer_email);
                setCustomerUsername(decodedToken.customer_username);
            }
        }
    }, [customerId]);

    if (!orderWithTourInfo) return <div>Loading...</div>;

    return (
        <section>
            <nav className="navigation">
                <button className="nav-link" type="button" onClick={() => handleNavLinkClick('profile')}>
                    User Profile
                </button>
                <button className="nav-link" type="button" onClick={() => handleNavLinkClick('orders')}>
                    Orders
                </button>
            </nav>
            <section id="profile" className={activeSection === 'profile' ? '' : 'hidden'}>
                <div className="profile">
                    <div className="profile-box">
                        <h3 style={{fontWeight: 700}}>THÔNG TIN NGƯỜI DÙNG</h3>
                        <p>Tên: {customerName} </p>
                        <p>Ngày Sinh: {customerDob}</p>
                        <p>Số Điện Thoại: {customerPhone}</p>
                        <p>Địa Chỉ: {customerAddress}</p>
                        <p>Email: {customerEmail}</p>
                        <p>Username: {customerUsername}</p>
                    </div>
                </div>
            </section>
            <section id="orders" className={activeSection === 'orders' ? '' : 'hidden'}>
                <div className="orders">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Tour</th>
                                <th>Thời Gian</th>
                                <th>Số Người</th>
                                <th>Ngày Đặt</th>
                                <th>Hình Thức Thanh Toán</th>
                                <th>Tổng Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orderWithTourInfo.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.tourInfo.name}</td>
                                    <td>{item.tourInfo.duration}</td>
                                    <td>{item.order.numberOfPeople}</td>
                                    <td>{formatDate(item.order.date)}</td> 
                                    <td>{item.order.payment}</td>
                                    <td>{item.order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
};

export default Profile;
