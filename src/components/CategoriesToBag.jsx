import React from "react";
import { catToBag } from "../assets/data_items/dodt-data";

const h1Style = {
    margin: "4rem 2rem",
};

function CategoriesToBag() {
    return (
        <>
            <h1 style={h1Style}>{catToBag[0].title}</h1>
            <div className="cat-to-bag">
                {catToBag[0].categories.map((item, i) => {
                    return (
                        <a key={i} href="" className="cat-to-bag-link">
                            <img
                                src={item.catImagLink}
                                alt={item.category}
                                title={item.category}
                            />
                        </a>
                    );
                })}
            </div>
        </>
    );
}

export default CategoriesToBag;
