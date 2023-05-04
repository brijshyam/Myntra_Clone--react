import React from "react";

function Navbar({ numberOfItemInCart, setShowItemsInCart, setSearchValue }) {
    const cartClickHandler = () => {
        setShowItemsInCart(true);
    };
    const searchValueHandler = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <>
            <nav className="nav">
                <div className="icon-holder">
                    <img src="src/icon.jpeg" alt="logo" />
                </div>
                <ul className="menu-items-container">
                    <li className="item">Men</li>
                    <li className="item">Women</li>
                    <li className="item">Kid</li>
                </ul>
                <div className="search-wrapper">
                    <img
                        className="search-icon"
                        src="src/search-icon.svg"
                        alt=""
                    />
                    <input
                        className="input-bar"
                        type="text"
                        placeholder="search your product here"
                        onChange={searchValueHandler}
                    />
                </div>
                <div className="cart-holder" onClick={cartClickHandler}>
                    <img src="src/shopping-cart-solid.svg" alt="" />
                </div>
                <div className="cart-list-length">{numberOfItemInCart}</div>
            </nav>
        </>
    );
}

export default Navbar;
