import React from "react";
import { dodtData } from "../data_items/dodt-data";

const dodtContainerStyle = {
    marginTop: "3rem",
};

const h1Style = {
    margin: "4rem 2rem",
};

const dataContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    overflow: "hidden",
};
const dataImageStyle = {
    width: "145px",
    cursor: "pointer",
};

function DealOfTheDay() {
    return (
        <div style={dodtContainerStyle}>
            <h1 style={h1Style}>Deal of the Day</h1>
            <div style={dataContainerStyle}>
                {dodtData.map((item) => {
                    return (
                        <a href="#" key={item.itemId}>
                            <img
                                style={dataImageStyle}
                                src={item.imageSrc}
                                alt=""
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default DealOfTheDay;
