import React from "react";
import "../styles/UserSubMenu.css";
import { useNavigate } from "react-router-dom";

function UserSubMenu() {
    const currentColor = document.documentElement.style.getPropertyValue(
        "--menu-underline-color"
    );
    const navigateTo = useNavigate();

    const loginHandler = () => {
        navigateTo("/login-signup");
    };
    const orderClickHandler = () => {
        navigateTo("/orders");
    };
    return (
        <div className="submenu-col user-submenu">
            <div className="submenu-title">
                <p>To access account and manage orders</p>
                <button className="login-btn" onClick={loginHandler}>
                    Login / Signup
                </button>
            </div>
            <ul>
                <li className="submenu-item active" onClick={orderClickHandler}>
                    <box-icon
                        type="solid"
                        name="package"
                        color={currentColor}
                    ></box-icon>
                    <p className="submenu-item_name">My Orders</p>
                </li>
                <li className="submenu-item">item1</li>
                <li className="submenu-item">item1</li>
                <li className="submenu-item">item1</li>
            </ul>
        </div>
    );
}

export default UserSubMenu;
