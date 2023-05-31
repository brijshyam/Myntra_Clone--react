import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuyButton(totalItemInCart) {
    const [buy, setBuy] = useState(false);
    const navigatTo = useNavigate();

    function buyBtnHandler() {
        setBuy(true);
        navigatTo("/payment");
    }
    return (
        <div className="btn-container">
            <button className="btn" onClick={buyBtnHandler}>
                Proceed To Buy
            </button>
        </div>
    );
}

export default BuyButton;
