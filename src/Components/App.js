import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const App = () => {
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
