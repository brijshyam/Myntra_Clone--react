import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import ProductModal from "./ProductModal";
import CartContainerModal from "./CartContainerModal";
import data from "../../data";

function Homepage() {
    const originalData = Array.from(data);
    const [clickedItem, setClickedItem] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [numberOfItemInCart, setNumberOfItemInCart] = useState(0);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [showItemsInCart, setShowItemsInCart] = useState(false);
    // Moved while rearranging..
    const [gender, setGender] = useState("M");
    ``;
    const [category, setCategory] = useState("");
    // Adding logics here only to update the code
    const [dataToBeRendered, setDataToBeRendered] = useState(data);
    const [sortBasedOn, setSortBasedOn] = useState("new");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const filteredDataBasedOnGender = data.filter(
            (item) => item.gender === gender
        );
        const sortedData = (function () {
            if (sortBasedOn === "new") {
                return filteredDataBasedOnGender;
            } else if (sortBasedOn === "price") {
                return filteredDataBasedOnGender.sort(
                    (a, b) => a.finalPrice - b.finalPrice
                );
            } else if (sortBasedOn === "discount") {
                return filteredDataBasedOnGender.sort(
                    (a, b) => b.discount - a.discount
                );
            }
        })();

        const categorisedData = (function () {
            if (category === "") {
                return sortedData;
            } else if (category === "white") {
                return sortedData.filter((item) => item.cat === "W");
            } else if (category === "foldedSleeve") {
                return sortedData.filter(
                    (item) => item.folded.toLowerCase() === "y"
                );
            }
        })();
        const searchedData = (function () {
            if (searchValue === "") {
                return categorisedData;
            } else {
                return categorisedData.filter((item) => {
                    return (
                        item.description
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                        item.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    );
                });
            }
        })();
        searchedData.length > 0
            ? setDataToBeRendered(searchedData)
            : setDataToBeRendered([
                  {
                      name: "NO DATA FOUND!!!",
                      description: "please search for something else...",
                      otherImages: ["https://hellow.com"],
                  },
              ]);
    }, [gender, sortBasedOn, category, searchValue]);

    return (
        <>
            <CartContainerModal
                showItemsInCart={showItemsInCart}
                setShowItemsInCart={setShowItemsInCart}
                itemsInCart={itemsInCart}
            />
            <ProductModal
                clickedItem={clickedItem}
                showModal={showModal}
                setShowModal={setShowModal}
                setNumberOfItemInCart={setNumberOfItemInCart}
                setItemsInCart={setItemsInCart}
                itemsInCart={itemsInCart}
            />
            <Navbar
                numberOfItemInCart={numberOfItemInCart}
                setShowItemsInCart={setShowItemsInCart}
                setSearchValue={setSearchValue}
            />
            <MainContent
                data={dataToBeRendered}
                setClickedItem={setClickedItem}
                setShowModal={setShowModal}
                gender={gender}
                setGender={setGender}
                category={category}
                setCategory={setCategory}
                setSortBasedOn={setSortBasedOn}
            />
        </>
    );
}

export default Homepage;
