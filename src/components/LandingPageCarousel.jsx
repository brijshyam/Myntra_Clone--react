import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import item1 from "../../public/assets/carousel-item-1.webp";
import item2 from "../../public/assets/carousel-item-2.webp";
import item3 from "../../public/assets/carousel-item-3.webp";
import item4 from "../../public/assets/carousel-item-4.webp";
import item5 from "../../public/assets/carousel-item-5.webp";

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
                    <img src={item1} />
                </div>
                <div>
                    <img src={item2} />
                </div>
                <div>
                    <img src={item3} />
                </div>
                <div>
                    <img src={item4} />
                </div>
                <div>
                    <img src={item5} />
                </div>
            </Carousel>
        </div>
    );
}

export default LandingPageCarousel;
