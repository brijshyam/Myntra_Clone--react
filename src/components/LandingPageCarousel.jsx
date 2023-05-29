import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function LandingPageCarousel() {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay={true}
                stopOnHover={true}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src="../../public/assets/carousel-item-1.webp" />
                </div>
                <div>
                    <img src="../../public/assets/carousel-item-2.webp" />
                </div>
                <div>
                    <img src="../../public/assets/carousel-item-3.webp" />
                </div>
                <div>
                    <img src="../../public/assets/carousel-item-4.webp" />
                </div>
                <div>
                    <img src="../../public/assets/carousel-item-5.webp" />
                </div>
            </Carousel>
        </div>
    );
}

export default LandingPageCarousel;
