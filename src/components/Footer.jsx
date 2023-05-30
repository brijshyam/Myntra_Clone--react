import React from "react";
import { col1, col2, popularSearches } from "../data_items/footerItems";
import googlePlay from "../../public/assets/google_play-download.png";
import appStore from "../../public/assets/apple_store-download.png";
import guaranteeImg from "../../public/assets/guarantee-img.png";
import returnPolicyImg from "../../public/assets/return-policy-img.png";

function Footer() {
    return (
        <div className="footer-container">
            <div className="foot-col1">
                <p className="foot-header">{col1[0].title}</p>
                <ul>
                    {col1[0].links.map((item, idx) => (
                        <li className="foot-li-items" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="foot-header">{col1[1].title}</p>
                <ul>
                    {col1[1].links.map((item, idx) => (
                        <li className="foot-li-items" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="foot-col2">
                <p className="foot-header">{col2[0].title}</p>
                <ul>
                    {col2[0].links.map((item, idx) => (
                        <li className="foot-li-items" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="foot-col3">
                <p className="foot-header">experience myntra on mobile app</p>
                <div className="download-btn-wrapper">
                    <a href="">
                        <img src={googlePlay} alt="Google play store icon" />
                    </a>
                    <a href="">
                        <img src={appStore} alt="Google play store icon" />
                    </a>
                </div>
                <p className="foot-header">Keep in touch</p>
                <a href="">
                    <box-icon
                        color="#282c3f"
                        type="logo"
                        name="facebook-square"
                    ></box-icon>
                </a>
                <a href="">
                    <box-icon
                        color="#282c3f"
                        type="logo"
                        name="twitter"
                    ></box-icon>
                </a>
                <a href="">
                    <box-icon
                        color="#282c3f"
                        type="logo"
                        name="instagram"
                    ></box-icon>
                </a>
                <a href="">
                    <box-icon
                        color="#282c3f"
                        type="logo"
                        name="youtube"
                    ></box-icon>
                </a>
            </div>
            <div className="foot-col4">
                <p className="guarantee-and-return-para">
                    <img src={guaranteeImg} alt="" />
                    <span className="foot-header">100% ORIGINAL</span>
                </p>
                <p className="guarantee-and-return-para">
                    <img src={returnPolicyImg} alt="" />
                    <span className="foot-header">Return within 14days</span>
                </p>
            </div>
            <div className="popular-searches">
                <p className="foot-header">Popular searches</p>
                {popularSearches.map((item, i) => {
                    return (
                        <a key={i} href="" className="search-link">
                            {item} |
                        </a>
                    );
                })}
            </div>
            <div className="bottom-most">
                <p className="concern-para">
                    In case of any concern, <a href="">Contact Us</a>
                </p>
                <p className="copyright-para">
                    &copy; 2023www.!brijshyam.com. All right not reserved by
                    Brij Shyam.
                </p>
            </div>
        </div>
    );
}

export default Footer;
