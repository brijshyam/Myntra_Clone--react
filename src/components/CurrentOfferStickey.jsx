import React from "react";

function CurrentOfferStickey({ isMobile }) {
    const currentOfferStyle = {
        position: "fixed",
        top: "50%",
        right: "-7%",
        transform: "rotate(-90deg)",
        zIndex: "2",
        backgroundColor: "#444",
        color: "#fff",
        padding: "0.5rem",
        textTransform: "uppercase",
        width: "15rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        visibility: `${isMobile() ? "hidden" : "visible"}`,
    };

    return (
        <div style={currentOfferStyle}>
            <h2 style={{ display: "inline" }}>Flat &nbsp; &#x20B9; 200 Off</h2>
            <box-icon name="up-arrow" type="solid" color="#ffffff"></box-icon>
        </div>
    );
}

export default CurrentOfferStickey;
