import React from "react";

function MobileMenuModal({ setShowMenu }) {
    return (
        <div>
            <ul className="menu-modal-list">
                <button
                    className="close-menu-btn"
                    onClick={() => setShowMenu(false)}
                >
                    X
                </button>
                <li className="menu-modal-item">
                    <a href="/">Men</a>
                </li>
                <li className="menu-modal-item">
                    <a href="/">Women</a>
                </li>
                <li className="menu-modal-item">
                    <a href="/">Kid</a>
                </li>
                <li className="menu-modal-item">
                    <a href="/">Home and Living</a>
                </li>
                <li className="menu-modal-item">
                    <a href="/">Beauty</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenuModal;
