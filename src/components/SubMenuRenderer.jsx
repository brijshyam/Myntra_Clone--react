import React from "react";
import { Link } from "react-router-dom";

const subMenuStyle = {
    position: "fixed",
    width: "fit-content",
    height: "80vh",
    top: "10.2%",
    left: "199px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    zIndex: "3",
};
function SubMenuRenderer({ submenuData, submenuHeadingColor }) {
    return (
        <div className={`submenu-container `} style={subMenuStyle}>
            <div className="submenu-col">
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[0].title}
                </h5>
                <ul>
                    {submenuData[0].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[1].title}
                </h5>
                <ul>
                    {submenuData[1].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="submenu-col">
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[2].title}
                </h5>
                <ul>
                    {submenuData[2].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[3].title}
                </h5>
                <ul>
                    {submenuData[3].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="submenu-col">
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[4].title}
                </h5>
                <ul>
                    {submenuData[4].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[5].title}
                </h5>
                <ul>
                    {submenuData[5].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="submenu-col">
                <h5 style={{ color: submenuHeadingColor }}>
                    {submenuData[6].title}
                </h5>
                <ul>
                    {submenuData[6].categories.map((item, index) => (
                        <li className="submenu-item" key={index}>
                            <Link
                                to={item.path}
                                id={`${item.enable ? "with-link" : ""}`}
                                title={`${
                                    item.enable
                                        ? ""
                                        : "This link is not active, probably under-development"
                                }`}
                            >
                                {item.menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SubMenuRenderer;
