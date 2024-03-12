import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import reviewIF from "../img/icon_submit_frame.png";
import reviewI from "../img/icon_submit_pen.png";

import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

import FOOD_LIST from "../data/food.json";

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
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                {/* <Route path=':restaurant' element={<Restaurant/>}/> */}
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<Navigate to='home' />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
