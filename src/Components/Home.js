// import logo from "../img/foodfinder-logo-white.png";
import logo from "../img/foodfinderlogo.jpg";
import search from "../img/searchicon.png";
import arrow from "../img/right_arrow.png";

import Dropdown from "./Dropdown.js";
import FoodList from "./FoodList.js";

import food from "../data/food.json";
import dropdowns from "../data/dropdowns.json";

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
                <Dropdown category={dropdowns.distance}/>

                <button className="btn right">GO</button>
                <button className="btn right icon"><img src={arrow} alt="mobile submit icon"/></button>
            </div>
        
            <main>
                <div className="box food">
                    <FoodList foodData={food}/>
                </div>
            </main>
        </div>
      );
}

export default Home;