import React, { useState } from 'react';

import Dropdown from "./Dropdown.js";
import FoodList from "./FoodList.js";

import dropdowns from "../data/dropdowns.json";

function Home(props) {
    const [dropdown, setDropdown] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    let foodList = props.foodList;

    function dropdownSelection(item) {
        setDropdown(item);
    }

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    if (dropdown !== "") {
        foodList = foodList.filter((restaurant) => (restaurant.cost === dropdown || restaurant.type === dropdown || restaurant.rating === dropdown));
    }

    if (searchTerm) {
        foodList = foodList.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return (
        <div>
            <header className="home-header">
                <div className="head col box">
                    <img src="../img/foodfinderlogo.jpg" alt="foodfinder full logo" className="logo"/>
                    <div className="search box">
                        <input type="text" placeholder="Search..." onChange={handleSearch} />
                        <button>
                            <img src="../img/searchicon.png" alt="search magnifying glass icon"/>
                        </button>
                    </div>
                </div>
            </header>

            <div className="nav box">
                <h1>Looking to explore new restaurants?</h1>

                <Dropdown category={dropdowns.price} callback={dropdownSelection} />
                <Dropdown category={dropdowns.cuisine} callback={dropdownSelection} />
                <Dropdown category={dropdowns.rating} callback={dropdownSelection} />

                <button className="btn right" type = "home" onClick={() => {setDropdown("")}}>Reset</button>
                <button className="btn right icon" type = "home" onClick={() => {setDropdown("")}}><img src="../img/go-back-arrow.png" alt="reset image"></img></button>
            </div>

            <main>
                <FoodList foodData={foodList} />
            </main>
        </div>
      );
}

export default Home;