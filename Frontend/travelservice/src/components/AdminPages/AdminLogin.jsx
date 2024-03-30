import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
              await fetch('https://localhost:7026/api/admin/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            }).then(response=>response.json()).then(data=>{
                      console.log(data)
                      if(data !==null){
                          localStorage.setItem("token", data.token)
                          navigate('/admin/dashboard');
                      }
                      else{
                          setError(true)
                      }
                  });
          } catch (error) {
            setError(true);
            console.error('Error:', error);
        }
    };
    return (
        <section className="vh-100" style={{ backgroundColor: 'cadetblue' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{ borderRadius: '1rem' }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form onSubmit={handleSubmit}>
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <img src="/assets/images/travel-logo.png" style={{ width: '90px', height: '90px' }} alt="travel-pic" />
                                            <span className="h3">ADMIN DASHBOARD</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Đăng Nhập Vào Tài Khoản Quản Lý</h5>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <input type="text" id="username" className="form-control" name="username" value={formData.username} onChange={handleInputChange}/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Mật Khẩu</label>
                                            <input type="password" id="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange}/>
                                        </div>
                                        {error && (<div className="text-danger">Bạn đã nhập sai mã số nhân viên hoặc mật khẩu</div>)}
                                        <div className="pt-1 mb-4">
                                           <button className="btn btn-primary btn-lg btn-block" type="submit">Đăng Nhập</button>
                                        </div>
                                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Bạn là Khách Hàng? <a href="/" style={{ color: 'darkgoldenrod' }}>Về Trang Chủ</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default AdminLogin;
