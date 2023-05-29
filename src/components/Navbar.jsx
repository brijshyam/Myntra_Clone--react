import React, { useState } from "react";
import {
    men,
    woman,
    kids,
    homeAndLiving,
    beauty,
} from "../assets/data_items/subMenuData";
import SubMenuRenderer from "./SubMenuRenderer";

function Navbar({ numberOfItemInCart, setShowItemsInCart, setSearchValue }) {
    const [submenuData, setSubmenuData] = useState("");
    const [submenuHeadingColor, setSubmenuHeadingColor] = useState("");
    const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);

    const cartClickHandler = () => {
        setShowItemsInCart(true);
    };

    const searchValueHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const hoverHandler = (e) => {
        // setIsHovered(true);
        const hoveredOn = e.target.textContent;
        switch (hoveredOn) {
            case "Men":
                setSubmenuData(men);
                setSubmenuHeadingColor("#ee5f73");
                document.documentElement.style.setProperty(
                    "--menu-underline-color",
                    "#ee5f73"
                );
                break;
            case "Women":
                setSubmenuData(woman);
                setSubmenuHeadingColor("#fb56c1");
                document.documentElement.style.setProperty(
                    "--menu-underline-color",
                    "#fb56c1"
                );
                break;
            case "Kid":
                setSubmenuData(kids);
                setSubmenuHeadingColor("#f26a10");
                document.documentElement.style.setProperty(
                    "--menu-underline-color",
                    "#f26a10"
                );
                break;
            case "Home&Living":
                setSubmenuData(homeAndLiving);
                setSubmenuHeadingColor("#f2c210");
                document.documentElement.style.setProperty(
                    "--menu-underline-color",
                    "#f2c210"
                );
                break;
            case "Beauty":
                setSubmenuData(beauty);
                setSubmenuHeadingColor("#0db7af");
                document.documentElement.style.setProperty(
                    "--menu-underline-color",
                    "#0db7af"
                );

                break;
            default:
                break;
        }
        setIsSubMenuHovered(true);
    };

    const resetSubMenu = () => {
        setIsSubMenuHovered(false);
    };

    return (
        <>
            <nav className="nav">
                <div className="logo-holder">
                    <img src="src/assets/myntra-icon-logo.svg" alt="logo" />
                </div>
                <ul className="menu-items-container">
                    <li
                        onMouseEnter={hoverHandler}
                        onMouseLeave={resetSubMenu}
                        className="menu-item"
                    >
                        Men
                        {isSubMenuHovered && submenuData === men && (
                            <SubMenuRenderer
                                submenuData={submenuData}
                                submenuHeadingColor={submenuHeadingColor}
                            />
                        )}
                    </li>
                    <li
                        onMouseEnter={hoverHandler}
                        onMouseLeave={resetSubMenu}
                        className="menu-item"
                    >
                        Women
                        {isSubMenuHovered && submenuData === woman && (
                            <SubMenuRenderer
                                submenuData={submenuData}
                                submenuHeadingColor={submenuHeadingColor}
                            />
                        )}
                    </li>
                    <li
                        onMouseEnter={hoverHandler}
                        onMouseLeave={resetSubMenu}
                        className="menu-item"
                    >
                        Kid
                        {isSubMenuHovered && submenuData === kids && (
                            <SubMenuRenderer
                                submenuData={submenuData}
                                submenuHeadingColor={submenuHeadingColor}
                            />
                        )}
                    </li>
                    <li
                        onMouseEnter={hoverHandler}
                        onMouseLeave={resetSubMenu}
                        className="menu-item"
                    >
                        Home&Living
                        {isSubMenuHovered && submenuData === homeAndLiving && (
                            <SubMenuRenderer
                                submenuData={submenuData}
                                submenuHeadingColor={submenuHeadingColor}
                            />
                        )}
                    </li>
                    <li
                        onMouseEnter={hoverHandler}
                        onMouseLeave={resetSubMenu}
                        className="menu-item"
                    >
                        Beauty
                        {isSubMenuHovered && submenuData === beauty && (
                            <SubMenuRenderer
                                submenuData={submenuData}
                                submenuHeadingColor={submenuHeadingColor}
                            />
                        )}
                    </li>
                </ul>
                <div className="search-wrapper">
                    <img
                        className="search-icon"
                        src="src/assets/search-icon.svg"
                        alt=""
                    />
                    <input
                        className="input-bar"
                        type="text"
                        placeholder="search your product here"
                        onChange={searchValueHandler}
                    />
                </div>
                <div className="cart-profile-wishlist-holder">
                    <div className="profile-holder" onClick={cartClickHandler}>
                        <box-icon name="user"></box-icon>
                    </div>
                    <div className="wishlist-holder" onClick={cartClickHandler}>
                        <box-icon name="shopping-bag"></box-icon>
                        {numberOfItemInCart && (
                            <div className="added-count">
                                {numberOfItemInCart}
                            </div>
                        )}
                    </div>
                    <div className="cart-holder" onClick={cartClickHandler}>
                        <box-icon name="cart"></box-icon>
                        {numberOfItemInCart && (
                            <div className="added-count">
                                {numberOfItemInCart}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
