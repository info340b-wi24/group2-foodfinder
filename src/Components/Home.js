// import logo from "../img/foodfinder-logo-white.png";
import logo from "../img/foodfinderlogo.jpg";
import search from "../img/searchicon.png";
import korean_tofu_house from "../img/korean_tofu_house.png"
import thai_tom from "../img/thaiTom.jpg";
import placeholder from "../img/FOOD.webp";
import arrow from "../img/right_arrow.png";
import icon from "../img/foodfinder-favicon-white 2.png";
import FoodList from "./FoodList.js";
import FOOD_LIST from "../data/food.json";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <header className="home-header">
                <div className="head col box">
                    <img src={logo} alt="home" className="logo"/>
                    <div className="search box">
                        <input type="text" placeholder="Search..."/>
                        <button>
                            <img src={search} alt="home"/>
                        </button>
                    </div>
                </div>
            </header>

            <div className="nav box">
                <h1>Looking to explore new restaurants?</h1>

                <div className="dropdown">
                    <button className="dropbtn">Price</button>
                    <div className="dropdown-content">
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Cuisine</button>
                    <div className="dropdown-content">
                        <button>Thai</button>
                        <button>Chinese</button>
                        <button>Mexican</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Rating</button>
                    <div className="dropdown-content">
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Distance</button>
                    <div className="dropdown-content">
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                    </div>
                </div>

                <button className="btn right">GO</button>
                <button className="btn right icon"><img src={arrow} alt="home"/></button>
            </div>
        
            <main>
                <FoodList foodData = {FOOD_LIST}/>
            </main>
        </div>
      );
}

export default Home;