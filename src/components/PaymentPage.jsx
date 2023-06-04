import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderStatusTimeline from "./OrderStatusTimeline";

function PaymentPage() {
    const [showStatus, setShowStatus] = useState(false);
    const navigatTo = useNavigate();
    function continueShoppingHandler(e) {
        e.preventDefault();
        navigatTo("/");
    }

    const trackHandler = () => {
        setShowStatus(!showStatus);
    };

    function randomId() {
        const id = Math.floor(Math.random() * 1e9);
        return id;
    }
    return (
        <div className="payment-container">
            <h1>Payment Confirmation</h1>
            <div className="payment-succes">
                <box-icon
                    name="check-circle"
                    type="solid"
                    animation="tada"
                    color="#408140"
                    size="100px"
                ></box-icon>
                <p>Your payment is confirmed</p>
                <p> Thank you for your purchase.</p>
                <p style={{ marginTop: "1rem" }}>
                    Your order Id is : {randomId()}{" "}
                </p>
            </div>
            {showStatus && <OrderStatusTimeline />}
            <div className="payment-bottom">
                <button
                    className="confirm-page-btn track"
                    onClick={trackHandler}
                >
                    Track Your Order
                </button>
                <button
                    className="confirm-page-btn"
                    onClick={continueShoppingHandler}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default PaymentPage;
