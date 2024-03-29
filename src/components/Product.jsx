import React from "react";

export default function Product(props) {
    let data = props.data;
    return (
        <div
            className={"indiv-tile-holder"}
            onClick={() => {
                props.clickHandler(data);
            }}
        >
            {/* <div>{JSON.stringify(data)}</div> */}
            <div className={"indiv-img-holder"}>
                <img width={"200px"} src={data.otherImages[0]}></img>
            </div>
            <div className={"indiv-tile-metaData"}>
                <h4>{data.name}</h4>
                <div style={{ fontSize: "0.9em", textOverflow: "clip" }}>
                    <i>{data.description}</i>
                </div>
                <div>
                    {(data.finalPrice ? "Rs." + data.finalPrice : " ") + " "}
                    <strike>
                        <div style={{ fontSize: "0.8em", display: "inline" }}>
                            {data.strickPrice}
                        </div>
                    </strike>
                    <i style={{ color: "red" }}>
                        {data.discount ? data.discount + "% OFF" : " "}
                    </i>
                </div>
            </div>
        </div>
    );
}

/* function ProductTile({ item, tileClickHandler }) {
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
    } */
