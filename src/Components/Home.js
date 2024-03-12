import React, { useState } from 'react';

import Dropdown from "./Dropdown.js";
import FoodList from "./FoodList.js";

import dropdowns from "../data/dropdowns.json";
import FOOD_LIST from "../data/food.json";

function Home(props) {
    const [dropdown, setDropdown] = useState("");
    let foodList = props.foodList;

    function dropdownSelection(item) {
        setDropdown(item);
    }
    
    if (dropdown !== "") {
        foodList = FOOD_LIST.filter((restaurant) => (restaurant.cost === dropdown || restaurant.type === dropdown || restaurant.rating === dropdown));
    }

    return (
        <div>
            <header className="home-header">
                <div className="head col box">
                    <img src="../img/foodfinderlogo.jpg" alt="foodfinder full logo" className="logo"/>
                    <div className="search box">
                        <input type="text" placeholder="Search..."/>
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

                <button className="btn right" onClick={() => {setDropdown("")}}>Reset</button>
            </div>
        
            <main>
                <FoodList foodData={foodList}/>
            </main>
        </div>
      );
}

export default Home;