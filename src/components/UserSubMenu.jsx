import React from "react";
import "../styles/UserSubMenu.css";
import { useNavigate } from "react-router-dom";

function UserSubMenu() {
    const user = JSON.parse(localStorage.getItem("userData")) || {
        name: "",
        email: "",
        password: "",
        loggedIn: false,
    };
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

    const logoutHandler = () => {
        const stored = JSON.parse(localStorage.getItem("userData"));
        stored.loggedIn = false;
        localStorage.setItem("userData", JSON.stringify(stored));
        navigateTo("/");
    };
    return (
        <div className="submenu-col user-submenu">
            <div className="submenu-title">
                {!user.loggedIn ? (
                    <>
                        {" "}
                        <p>To access account and manage orders</p>
                        <button className="login-btn" onClick={loginHandler}>
                            Login / Signup
                        </button>
                    </>
                ) : (
                    <p
                        style={{
                            color: currentColor,
                            fontSize: "1rem",
                            fontWeight: "500",
                            textTransform: "capitalize",
                        }}
                    >
                        Hi, {user.name}
                    </p>
                )}
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
            <button className="logout-btn" onClick={logoutHandler}>
                Logout
            </button>
        </div>
    );
}

export default UserSubMenu;
