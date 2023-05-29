import React from "react";

function SortingComponent({ setSortBasedOn }) {
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
    return (
        <>
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
        </>
    );
}

export default SortingComponent;
