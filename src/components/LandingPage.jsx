import React, { useState } from "react";
import Navbar from "./Navbar";
import LandingPageCarousel from "./LandingPageCarousel";
import DealOfTheDay from "./DealOfTheDay";
import Footer from "./Footer";
import BiggestDealOnBrands from "./BiggestDealOnBrands";
import CategoriesToBag from "./CategoriesToBag";
import CurrentOfferStickey from "./CurrentOfferStickey";
import MobileTopNav from "./MobileTopNav";

const LandingPage = () => {
    const [isHovered, setIsHovered] = useState(false);

    function isMobile() {
        if (window.innerWidth < 768) {
            console.log("it is mobile and inner width is :", window.innerWidth);
            return true;
        }
    }

    const wrapperStyle = {
        backgroundColor: `${isHovered ? "rgba(0, 0, 0, 0.2)" : ""}`,
    };
    return (
        <>
            <Navbar />
            <MobileTopNav />

            <div style={wrapperStyle}>
                <LandingPageCarousel />
                <CurrentOfferStickey isMobile={isMobile} />
                <DealOfTheDay />
                <BiggestDealOnBrands />
                <CategoriesToBag />
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
