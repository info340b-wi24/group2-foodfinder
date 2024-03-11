// import logo from "../img/foodfinder-logo-white.png";
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

function Home() {
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

                <Dropdown category={dropdowns.price}/>
                <Dropdown category={dropdowns.cuisine}/>
                <Dropdown category={dropdowns.rating}/>

                <button className="btn right">GO</button>
                <button className="btn right icon"><img src={arrow} alt="mobile submit icon"/></button>
            </div>
        
            <main>
                <FoodList foodData = {FOOD_LIST}/>
            </main>
        </div>
      );
}

export default Home;