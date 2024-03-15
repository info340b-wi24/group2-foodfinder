import React, { useState } from 'react';

import FOOD_LIST from "../data/food.json";
import { Routes, Route, Navigate } from 'react-router-dom';
import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const App = () => {
    const [restaurant, setRestaurant] = useState(FOOD_LIST);
    const [reviews, setReviews] = useState([]);

    function applyRestaurant(newRestaurant) {
        const foodList = FOOD_LIST;
        foodList.push(newRestaurant);
        setRestaurant(foodList);
    }

    function updateReview(newContent) {
        const reviewContent = reviews;
        reviewContent.push(newContent);
        setReviews(reviewContent);
    }
    
    return (
        <div>
            <header>
                <Navbar />
            </header>
           
            <Routes>
                <Route path="/home" element={<Home foodList={restaurant} />} />
                <Route path="/restaurant"  >
                    <Route path=":restaurant" element={<Restaurant foodList={restaurant} reviews={reviews} callbackFunc={updateReview}/> } />
                </Route>
                <Route path="/upload" element={<Upload foodList={restaurant} applyRestaurantCallback={applyRestaurant} />} />
                <Route path="*" element={<Navigate to='home' />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
