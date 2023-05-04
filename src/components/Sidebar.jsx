import React, { useEffect, useState } from "react";

function Sidebar({ gender, setGender, setCategory }) {
    const [isChecked, setIsChecked] = useState(false);
    const [identifiedCheckbox, setIdentifiedCheckbox] = useState("");
    const selectGenderHandler = (e) => {
        setGender(e.target.value);
    };
    useEffect(() => {
        if (!isChecked) {
            setCategory("");
        } else if (isChecked && identifiedCheckbox === "white") {
            setCategory("white");
        } else if (isChecked && identifiedCheckbox === "foldedSleeve") {
            setCategory("foldedSleeve");
        }
    }, [isChecked]);
    return (
        <div className="filter-holder">
            <div className="Gender" onChange={selectGenderHandler}>
                <p className="side-headings">Gender:-</p>
                <div className="gender-one">
                    <input
                        value={"M"}
                        type="radio"
                        name="gender"
                        id="male"
                        checked={gender === "M"}
                    />
                    <label htmlFor="male">Men </label>
                </div>
                <div className="gender-two">
                    <input
                        value={"F"}
                        type="radio"
                        name="gender"
                        id="female"
                        checked={gender === "F"}
                    />
                    <label htmlFor="female">Women </label>
                </div>
            </div>

            <div className="categories">
                <p className="side-headings">Catagory:-</p>
                <div className="category-one">
                    <input
                        type="checkbox"
                        name="catagory"
                        value="white"
                        onChange={(e) => setIsChecked(e.target.checked)}
                        onClick={(e) => setIdentifiedCheckbox(e.target.value)}
                    />
                    <label htmlFor="catagory">White</label>
                </div>
                <div className="catagory-two">
                    <input
                        type="checkbox"
                        name="catagory"
                        value="foldedSleeve"
                        onChange={(e) => setIsChecked(e.target.checked)}
                        onClick={(e) => setIdentifiedCheckbox(e.target.value)}
                    />
                    <label htmlFor="catagory">Folded Sleeve</label>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
