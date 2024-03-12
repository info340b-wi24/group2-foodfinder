import React, { useState } from 'react';

import FOOD_LIST from "../data/food.json";
import { Routes, Route, Navigate } from 'react-router-dom';
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
                <Route path="/home" element={<Home foodList = {restaurant}/>} />
                <Route path="/restaurant" element={<Restaurant />} />
                {/* <Route path=':restaurant' element={<Restaurant/>}/> */}
                <Route path="/upload" element={<Upload applyRestaurantCallback = {applyRestaurant}/>} />
                <Route path="*" element={<Navigate to='home' />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
