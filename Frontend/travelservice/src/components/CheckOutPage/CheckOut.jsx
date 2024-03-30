import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';


const CheckOut = () => {
    const location = useLocation();
    
    const tourId = new URLSearchParams(location.search).get("id");

    const [tourDetailWithTourInfo, setTourDetailWithTourInfo] = useState(null);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(""); 
    const [customerId, setCustomerId] = useState(null); 
    const [customerName, setCustomerName] = useState(null);  

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
        if (!tourId) return;

        fetch(`https://localhost:7026/api/checkout/${tourId}`, {
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
            setTourDetailWithTourInfo(data);
        })
        .catch((error) => console.error(error));

        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                setCustomerId(decodedToken.customer_id);
                setCustomerName(decodedToken.customer_name);
                console.log(decodedToken.customer_id + " " + decodedToken.customer_name);
            }
        }
    }, [tourId]); 

    if (!tourDetailWithTourInfo) return <div>Loading...</div>;

    const { tour, tourDetail } = tourDetailWithTourInfo;

    const handleNumOfPeopleChange = (event) => {
        setNumOfPeople(parseInt(event.target.value));
    };

    const handleCalculateTotalPrice = async () => {
        try {
            const response = await fetch(`https://localhost:7026/api/checkout/${tourId}/calculate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(numOfPeople)
            });
            const totalPrice = await response.json();
            console.log(totalPrice);
            setTotalPrice(totalPrice);
        } catch (error) {
            console.error("Error calculating total price:", error);
        }
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const checkoutData = {
                NumberOfPeople: numOfPeople,
                PaymentMethod: paymentMethod,
                CustomerId: customerId,
                Total: totalPrice
            };
            await fetch(`https://localhost:7026/api/checkout/${tourId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(checkoutData)
            });
            await Swal.fire({
                icon: 'success',
                title: 'Order placed successfully',
                showConfirmButton: false,
                timer: 2000 
            }).then(() => {
                window.location.href = "/";
            });
        } catch (error) {
            console.error("Checkout failed:", error);
        }
    };

    return (
        <section>
            <div className="checkout">
                <div className="order-info">
                        <p>Họ tên: {customerName}</p>
                        <p>Tour: {tour.name}</p>
                        <p>Số Ngày: {tour.duration} </p>
                        <p>Thời gian: {tourDetail.begin_date} - {tourDetail.end_date}</p>
                    </div>
                <div className="calculate-price">
                    <p>Số người: &nbsp;&nbsp;
                        <input 
                            type="number" 
                            value={numOfPeople} 
                            onChange={handleNumOfPeopleChange} 
                            min={1} 
                            max={100} 
                        />
                    </p>
                    <br />
                    {totalPrice > 0 && 
                        <p>
                            <span className="result-label">Số tiền:</span>&nbsp;&nbsp; 
                            <span className="result-value" style={{ fontWeight: 'bold', color: 'red', fontSize: 30 }}>{totalPrice.toLocaleString()} đồng</span>
                        </p>
                    }
                    <button onClick={handleCalculateTotalPrice}>Tính giá</button>
                </div>
                <div className="checkout-payment">
                    <p>Vui lòng chọn phương thức thanh toán:</p>
                    <label htmlFor="VnPay" style={{ float: 'none' }}>
                        <input 
                            type="radio" 
                            name="checkout-method" 
                            value="VnPay" 
                            checked={paymentMethod === "VnPay"}
                            onChange={handlePaymentMethodChange} 
                        />
                        VNPAY
                    </label><br />
                    <label htmlFor="Credit" style={{ float: 'none' }}>
                        <input 
                            type="radio" 
                            name="checkout-method" 
                            value="Credit" 
                            checked={paymentMethod === "Credit"}
                            onChange={handlePaymentMethodChange} 
                        />
                        CREDIT
                    </label><br />
                    <button className="checkout-button" type="submit" onClick={handleSubmit}>THANH TOÁN</button>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;
