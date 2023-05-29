import React from "react";
import Product from "./Product";
import SortingComponent from "./SortingComponent";

function ProductDisplay({
    data,
    setShowModal,
    setClickedItem,
    setSortBasedOn,
}) {
    const productTileClickHandler = (cardData) => {
        setShowModal(true);
        setClickedItem(cardData);
    };

    return (
        <div className="product-wrapper">
            <SortingComponent setSortBasedOn={setSortBasedOn} />
            <div className="product-tile-holder">
                {data.map((item, index) => {
                    return (
                        // <ProductTile
                        //     key={index}
                        //     item={item}
                        //     productTileClickHandler={productTileClickHandler}
                        // />
                        <Product
                            key={index}
                            data={item}
                            clickHandler={productTileClickHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProductDisplay;
