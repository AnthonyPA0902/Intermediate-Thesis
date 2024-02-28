import React from "react";

const Forget = () => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#eee' }}>
        <div className="card text-center" style={{ width: '400px' }}>
            <div className="card-header h5 text-white bg-primary">Đặt Lại Mật Khẩu</div>
            <div className="card-body px-5">
                <p className="card-text py-2">
                    Nhập vào địa chỉ email của bạn và chúng tôi sẽ gửi bạn một mail với mật khẩu mới
                </p>
                <div className="form-outline">
                    <input type="email" id="typeEmail" className="form-control my-3" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Đặt Lại</button>
                <div style={{ justifyContent: 'center', marginTop: '20px' }}>
                    <a href="/login"><button type="button" className="btn btn-outline-danger">Đăng Nhập</button></a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Forget;