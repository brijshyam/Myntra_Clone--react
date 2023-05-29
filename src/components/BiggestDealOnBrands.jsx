import React from "react";
import { BiggestDeal } from "../data_items/dodt-data";

const h1Style = {
    margin: "4rem 2rem",
};

function BiggestDealOnBrands(props) {
    return (
        <>
            <h1 style={h1Style}>{BiggestDeal[0].title}</h1>
            <div className="deal-container">
                {BiggestDeal[0].brands.map((brandLink, index) => {
                    return (
                        <a key={index} href="" className="deal-item">
                            <img src={brandLink} alt="" />
                        </a>
                    );
                })}
            </div>
        </>
    );
}

export default BiggestDealOnBrands;
