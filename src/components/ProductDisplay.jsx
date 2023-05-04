import React from "react";

function ProductDisplay({
    data,
    setShowModal,
    setClickedItem,
    setSortBasedOn,
}) {
    const tileClickHandler = (cardData) => {
        setShowModal(true);
        setClickedItem(cardData);
    };
    const filterSelectHandler = (e) => {
        const basedOn = e.target.value;
        if (basedOn === "discount") {
            setSortBasedOn("discount");
        } else if (basedOn === "price") {
            setSortBasedOn("price");
        } else {
            setSortBasedOn("new");
        }
    };
    function ProductTile({ item, tileClickHandler }) {
        return (
            <>
                <div
                    className="indiv-tile-holder"
                    onClick={() => tileClickHandler(item)}
                >
                    <img
                        className="product-image"
                        src={item.otherImages[0]}
                        alt=""
                    />
                    <h3 className="product-name">{item.name}</h3>
                    <p className="prodcut-desc">{item.description}</p>
                    <p className="price-para">
                        <span className="final-price">
                            Rs.{item.finalPrice}
                        </span>
                        <strike className="">{item.strickPrice}</strike>
                        <span className="discount">{item.discount}% OFF</span>
                    </p>
                </div>
            </>
        );
    }

    return (
        <div className="product-wrapper">
            <div className="sort-holder">
                <span className="sortby">Sort by:-</span>
                <select
                    name=""
                    id=""
                    className="dropdown"
                    onChange={filterSelectHandler}
                >
                    <option className="options" value="new">
                        What's New
                    </option>
                    <option className="options" value="price">
                        Price low to high
                    </option>
                    <option className="options" value="discount">
                        Better Discount
                    </option>
                </select>
            </div>
            <div className="product-tile-holder">
                {data.map((item, index) => {
                    return (
                        <ProductTile
                            key={index}
                            item={item}
                            tileClickHandler={tileClickHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProductDisplay;
