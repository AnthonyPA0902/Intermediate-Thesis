import React from "react";

const CheckOut = () => {
    return (
      <section>
        <div className="checkout">
            <div className="order-info">
               Họ tên : Nguyễn Phước An <br />
               Tour : Du Lịch Phú Quốc <br />
               Thời gian : 21/2 - 24/2 <br />
               Số người : 4 <br />
               Số tiền : 32.000.000 đồng 
            </div>
            <div className="checkout-payment">
               <p>Vui lòng chọn phương thức thanh toán: </p>
                  <input type="radio" id="VNPay" name="checkout-method" value="VNPay" />
                  <label for="VNPay" style={{ float: 'none' }}>VNPAY</label><br />
                  <input type="radio" id="Paypal" name="checkout-method" value="Paypal" />
                  <label for="Paypal" style={{ float: 'none' }}>PAYPAL</label><br />
               <a href="/"><button className="checkout-button" type="submit">THANH TOÁN</button></a>
            </div>
        </div>
      </section>
    );
};

export default CheckOut;