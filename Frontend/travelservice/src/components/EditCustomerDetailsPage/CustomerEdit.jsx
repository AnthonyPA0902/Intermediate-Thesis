import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerEdit = () => {
    const [customerId, setCustomerId] = useState(null); 

    const [customer, setCustomer] = useState(null); 

    const [error, setError] = useState({});
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

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                setCustomerId(decodedToken.customer_id);
                console.log(decodedToken.customer_id);
            }
        }
        const fetchCustomerData = async () => {
            try {
                const response = await fetch(`https://localhost:7026/api/customer/edit/${customerId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const customerData = await response.json();
                    setCustomer(customerData); 
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchCustomerData();
    }, [customerId]);

    useEffect(() => {
        if (customer) {
            setFormData({
                name: customer.name,
                dob: customer.dob,
                address: customer.address,
                phone: customer.phone,
                email: customer.email,
                username: customer.username,
                password: customer.password,
            });
        }
    }, [customer]);

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
        const dob = new Date(formData.dob);
        if (dob >= currentDate) {
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
            try {
                const response = await fetch(`https://localhost:7026/api/customer/edit/${customerId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    navigate("/");
                    console.log("Edit successful");
                } else {
                    console.error("Edit failed");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };
    return (
        <div>
             <div>
                    <Link to={`/userinfo/${customerId}`}><button className="back-button">Quay trở lại</button></Link>
                        <form onSubmit={handleSubmit} className="create-employee-form">
                            <h2 className="form-title">Chỉnh Sửa Thông Tin Cá Nhân</h2>
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
                                <button className="create-button">Cập Nhật</button>
                                <Link to={`/userinfo/${customerId}}`}><button className="cancel-button">Hủy</button></Link>
                            </div>
                        </form>
                </div>
        </div>
    )
}

export default CustomerEdit;