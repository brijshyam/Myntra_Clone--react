import React from "react";
import BuyButton from "./BuyButton";

function CartContainerModal({
    showItemsInCart,
    setShowItemsInCart,
    itemsInCart,
}) {
    const showModalHandler = () => {
        setShowItemsInCart(false);
    };
    return (
        showItemsInCart && (
            <div id="cart-modal-content">
                <div className="content-header">
                    <h3>Items in cart</h3>
                    <span className="close-btn" onClick={showModalHandler}>
                        X
                    </span>
                </div>
                <div className="content-body">
                    <h4 className="content-item-count">
                        Total Items {itemsInCart.length}
                    </h4>
                    {itemsInCart.map((item, index) => {
                        return (
                            <div className="content-body-item" key={index}>
                                <img
                                    src={item.otherImages[0]}
                                    alt=""
                                    className="item-image"
                                />
                                <div className="item-desc">
                                    <h4>{item.name}</h4>
                                    <p className="item-size">
                                        Selected Size: {item.selectedSize}
                                    </p>
                                    <p className="item-price final-price">
                                        Rs. {item.finalPrice}
                                    </p>
                                    <strike>Rs. {item.strickPrice}</strike>
                                    <span className="discount">
                                        {" "}
                                        -{item.discount}%
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {
                    <div className="content-footer">
                        <p className="total-original-price ">
                            Total Original Price{" "}
                            {itemsInCart.reduce((acc, curr) => {
                                return acc + +curr.strickPrice;
                            }, 0)}
                        </p>
                        <p className="total-discount-price">
                            {`Total Discount ${itemsInCart.reduce(
                                (acc, curr) => {
                                    return (
                                        acc +
                                        +curr.strickPrice -
                                        +curr.finalPrice
                                    );
                                },
                                0
                            )}`}
                        </p>
                        <p className="total-final-price">{`Final Price ${itemsInCart.reduce(
                            (acc, curr) => {
                                return acc + +curr.finalPrice;
                            },
                            0
                        )}`}</p>
                        <BuyButton totalItemInCart={itemsInCart.length} />
                    </div>
                }
            </div>
        )
    );
}

export default CartContainerModal;
