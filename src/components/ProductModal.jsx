import React, { useEffect, useState } from "react";

function ProductModal({
    clickedItem,
    showModal,
    setShowModal,
    setNumberOfItemInCart,
    setItemsInCart,
    itemsInCart,
}) {
    const [chosenSize, setChosenSize] = useState(0);
    const closeBtnHandler = () => {
        setChosenSize(0);
        setShowModal(false);
    };
    const chosenSizeHandler = (e) => {
        setChosenSize(e.target.innerText);
    };
    const addToCartHandler = () => {
        const updatedProductToBeAdded = {
            ...clickedItem,
            selectedSize: chosenSize,
        };
        setChosenSize(0);
        setShowModal(false);
        setNumberOfItemInCart((prev) => prev + 1);
        setItemsInCart((prevItemsInCart) => [
            ...prevItemsInCart,
            updatedProductToBeAdded,
        ]);
    };

    return (
        showModal && (
            <div className="modal" id="product-modal">
                <div className="add-to-cart-data">
                    <div className="left-part">
                        <div className="product-image-grid">
                            <img
                                src={clickedItem.otherImages[0]}
                                alt=""
                                className="image"
                            />
                            <img
                                src={clickedItem.otherImages[1]}
                                alt=""
                                className="image"
                            />
                            <img
                                src={clickedItem.otherImages[2]}
                                alt=""
                                className="image"
                            />
                            <img
                                src={clickedItem.otherImages[3]}
                                alt=""
                                className="image"
                            />
                        </div>
                        <div className="product-detail-wrapper">
                            <h1 className="product-header">
                                {clickedItem.name}
                            </h1>
                            <p className="product-desc">
                                {clickedItem.description}
                            </p>
                            <p className="final-price">
                                Rs. {clickedItem.finalPrice}
                            </p>
                            <p className="strick-price">
                                Rs. {clickedItem.strickPrice}
                            </p>
                            <p className="discount">{clickedItem.discount}%</p>
                            <p className="size-header">Size Chart</p>
                            <div className="size-wrapper">
                                {clickedItem.productSize
                                    .split(", ")
                                    .map((size, i) => {
                                        return chosenSize === size ? (
                                            <div
                                                key={i}
                                                className={`size-option ${
                                                    chosenSize !== 0
                                                        ? "selected-size"
                                                        : ""
                                                }`}
                                                onClick={chosenSizeHandler}
                                            >
                                                {size}
                                            </div>
                                        ) : (
                                            <div
                                                key={i}
                                                className={`size-option`}
                                                onClick={chosenSizeHandler}
                                            >
                                                {size}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <button
                            className="add-to-cart-btn"
                            onClick={addToCartHandler}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="right-part">
                        <span className="close-btn" onClick={closeBtnHandler}>
                            x
                        </span>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductModal;
