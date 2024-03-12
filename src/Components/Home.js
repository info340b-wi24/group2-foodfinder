// import logo from "../img/foodfinder-logo-white.png";
import React, { useState } from 'react';

import logo from "../img/foodfinderlogo.jpg";
import search from "../img/searchicon.png";
import arrow from "../img/right_arrow.png";
import icon from "../img/foodfinder-favicon-white 2.png";
import korean_tofu_house from "../img/korean_tofu_house.png"
import thai_tom from "../img/thaiTom.jpg";
import placeholder from "../img/FOOD.webp";

import Dropdown from "./Dropdown.js";
import FoodList from "./FoodList.js";

import dropdowns from "../data/dropdowns.json";
import FOOD_LIST from "../data/food.json";
//onclick={setDropdown("")}
function Home() {
    const [dropdown, setDropdown] = useState("");
    let foodList = FOOD_LIST;

    function dropdownSelection(item) {
        setDropdown(item);
    }
    
    
    console.log(foodList);
    if (dropdown !== "") {
        foodList = FOOD_LIST.filter((restaurant) => (restaurant.cost === dropdown || restaurant.type === dropdown || restaurant.rating === dropdown));
    }
    console.log(foodList);
    return (
        <div>
            <header className="home-header">
                <div className="head col box">
                    <img src={logo} alt="foodfinder full logo" className="logo"/>
                    <div className="search box">
                        <input type="text" placeholder="Search..."/>
                        <button>
                            <img src={search} alt="search magnifying glass icon"/>
                        </button>
                    </div>
                </div>
            </header>

            <div className="nav box">
                <h1>Looking to explore new restaurants?</h1>

                <Dropdown category={dropdowns.price} callback={dropdownSelection} />
                <Dropdown category={dropdowns.cuisine} callback={dropdownSelection} />
                <Dropdown category={dropdowns.rating} callback={dropdownSelection} />

                <button className="btn right" onClick={() => {setDropdown("")}}>Reset</button>
            </div>
        
            <main>
                <FoodList foodData={foodList}/>
            </main>
        </div>
      );
}

export default Home;