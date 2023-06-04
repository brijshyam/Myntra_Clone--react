import React from "react";
import "../styles/OrderTimeline.css";

function OrderStatusTimeline() {
    return (
        <div class="horizontal timeline">
            <div class="steps">
                <div class="step ">
                    <span>Order Confirmed</span>
                </div>
                <div class="step current">
                    <span>Preparing</span>
                </div>
                <div class="step ">
                    <span>Shipped</span>
                </div>
                <div class="step">
                    <span>Delivered</span>
                </div>
            </div>

            <div class="line"></div>
        </div>
    );
}

export default OrderStatusTimeline;
