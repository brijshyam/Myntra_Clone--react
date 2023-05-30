import React, { useState } from "react";
import logo from "../../public/assets/myntra-icon-logo.svg";
import MobileMenuModal from "./MobileMenuModal";

function MobileTopNav() {
    const [showMenu, setShowMenu] = useState(false);

    const hamburgerClickHandler = (e) => {
        setShowMenu(true);
    };
    return (
        <div className="mobile-menu-wrapper">
            {showMenu && <MobileMenuModal setShowMenu={setShowMenu} />}
            <div className="left-wrapper" onClick={hamburgerClickHandler}>
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

export default MobileTopNav;
