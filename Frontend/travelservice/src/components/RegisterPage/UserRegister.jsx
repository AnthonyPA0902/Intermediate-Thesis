import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserRegister = () => {
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
                const response = await fetch('https://localhost:7026/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    navigate("/login");
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
        <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">
                                    <div className="text-center">
                                        <a href="/"><img src="/assets/images/travel-logo.png" style={{ width: '185px' }} alt="travel-pic" /></a>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <p>Hãy Tạo Tài Khoản Của Bạn</p>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="name">Họ Tên</label>
                                            <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                                            {error.name && <div className="text-danger">{error.name}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="birthday">Ngày Sinh</label>
                                            <input type="date" id="birthday" name="dob" className="form-control" value={formData.dob} onChange={handleChange}/>
                                            {error.dob && <div className="text-danger">{error.dob}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="address">Địa Chỉ</label>
                                            <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleChange}/>
                                            {error.address && <div className="text-danger">{error.address}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="telephone">Số Điện Thoại</label>
                                            <input type="tel" id="telephone" name="phone" className="form-control" value={formData.phone} onChange={handleChange}/>
                                            {error.phone && <div className="text-danger">{error.phone}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange}/>
                                            {error.email && <div className="text-danger">{error.email}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="username">Tài Khoản</label>
                                            <input type="text" id="username" name="username" className="form-control" value={formData.username} onChange={handleChange}/>
                                            {error.username && <div className="text-danger">{error.username}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Mật Khẩu</label>
                                            <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange}/>
                                            {error.password && <div className="text-danger">{error.password}</div>}
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Đã Có Tài Khoản?</p>&nbsp;&nbsp;
                                            <button type="submit" className="btn btn-outline-danger">Đăng Nhập</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <img src="/assets/images/register-image.jpg" style={{ width: '460px', height: '650px', padding: '35px' }} alt="register" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default UserRegister;