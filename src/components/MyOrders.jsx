import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/order.css";
import { useNavigate } from "react-router-dom";

function MyOrders() {
    const navigateTo = useNavigate();

    const cardClickHandler = () => {
        navigateTo("/order-details");
    };
    return (
        <>
            <Navbar />
            <div className="order-container">
                <h1>My Orders</h1>
                <div className="order-card" onClick={cardClickHandler}>
                    <img
                        src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21474618/2023/2/6/3fc0ad84-eb64-49db-8810-8b0085bc3d9f1675661229788-Louis-Philippe-Sport-Men-Tshirts-2481675661229099-1.jpg"
                        alt=""
                        className="order-img"
                    />
                    <p className="order-detail">Brown T-Shirt</p>
                    <p className="price">Rs. 299</p>
                    <p className="order-status">
                        Item will be delivered by 29Jun
                    </p>
                </div>
            </div>
        </>
    );
}

export default MyOrders;
