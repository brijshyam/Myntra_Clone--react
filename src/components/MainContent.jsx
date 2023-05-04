import React from "react";
import Sidebar from "./Sidebar";
import ProductDisplay from "./ProductDisplay";

function MainContent({
    data,
    gender,
    setGender,
    setCategory,
    setClickedItem,
    setShowModal,
    setSortBasedOn,
}) {
    return (
        <div className="main-content">
            <Sidebar
                gender={gender}
                setGender={setGender}
                setCategory={setCategory}
            />
            <ProductDisplay
                data={data}
                setShowModal={setShowModal}
                setClickedItem={setClickedItem}
                setSortBasedOn={setSortBasedOn}
            />
        </div>
    );
}

export default MainContent;
