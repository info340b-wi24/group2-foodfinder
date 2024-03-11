import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Upload from './Upload.js';

import Home from './Home.js';
import Restaurant from './Restaurant.js';

import logo from "../img/foodfinderlogo.jpg";
import icon from "../img/foodfinder-favicon-white 2.png";
import review from "../img/icon_submit.png";
import foodfinder from "../img/foodfinder-white-transparent-letters.png";


const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav">
                        <Link to="/"><img src={logo} alt="foodfinder full logo" className="logo left"/></Link>
                        <Link to="/"><img src={icon} alt="foodfinder icon" className="icon left"/></Link>

                        <img src={foodfinder} alt="home" className="center"/>
                        <button className="btn right"><Link to="/upload">SUBMIT A REVIEW</Link></button>
                        <Link to="/upload"><img src={review} alt="mobile review icon" className="icon right"/></Link>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                {/* <Route path=':restaurant' element={<Restaurant/>}/> */}
                <Route path="/upload" element={<Upload />} />

                <Route path="*" element={<Navigate to='home' />} />
            </Routes>

            <footer>
                <div className="footer box">
                    <div className="about col box">
                        <h1>ABOUT</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="credits col box">
                        <h1>MADE BY</h1>
                        <ul>
                            <li>Ryan</li>
                            <li>Ben</li>
                            <li>Kenny</li>
                            <li>Sean</li>
                        </ul>
                    </div>

                    <img src={icon} alt="foodfinder icon" className="right"/>
                </div>
            </footer>
        </div>
    );
};

export default App;