<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import logo from "../img/foodfinderlogo.jpg";
import icon from "../img/foodfinder-favicon-white 2.png";
import reviewIF from "../img/icon_submit_frame.png";
import reviewI from "../img/icon_submit_pen.png";
import korean_tofu_house from "../img/korean_tofu_house.png"
import FOOD_LIST from "../data/food.json";

=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
>>>>>>> 2a0ef03d018f20bf546bc02c5eb1649a9c5bb406

const App = () => {
    const [restaurant, setRestaurant] = useState(FOOD_LIST);

    function applyRestaurant(newRestaurant) {
        const foodList = FOOD_LIST;
        foodList.push(newRestaurant);
        setRestaurant(foodList);
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>

<<<<<<< HEAD
                        <button className="btn right"><Link to="/upload">SUBMIT A REVIEW</Link></button>
                        <img src={reviewIF} alt="home" className="right"></img>
                        <Link to="/upload"><img src={reviewI} alt="home" className="icon right"></img></Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home foodList = { restaurant } />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/upload" element={<Upload applyRestaurantCallback = {applyRestaurant}/>} />
                </Routes>
                <footer>
                <div className="footer box">
                    <div className="about col box">
                        <h1>ABOUT</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
=======
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                {/* <Route path=':restaurant' element={<Restaurant/>}/> */}
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<Navigate to='home' />} />
            </Routes>
>>>>>>> 2a0ef03d018f20bf546bc02c5eb1649a9c5bb406

            <Footer />
        </div>
    );
};

export default App;
