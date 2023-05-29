import React from "react";
import logo from "../../public/assets/myntra-icon-logo.svg";

function MobileMenu() {
    return (
        <div className="mobile-menu-wrapper">
            <div className="left-wrapper">
                <div className="hamburger-container">
                    <span className="ham-bar"></span>
                    <span className="ham-bar"></span>
                    <span className="ham-bar"></span>
                </div>
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="right-wrapper">
                <a>
                    <box-icon color="#282c3f" name="search"></box-icon>
                </a>
                <a>
                    <box-icon color="#282c3f" name="heart"></box-icon>
                </a>
                <a>
                    <box-icon color="#282c3f" name="shopping-bag"></box-icon>
                </a>
            </div>
        </div>
    );
}

export default MobileMenu;
