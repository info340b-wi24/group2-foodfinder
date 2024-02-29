import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Upload from './Upload.js';
import Home from './Home.js';
import Restaurant from './Restaurant.js';
import logo from "../img/foodfinderlogo.jpg";
import icon from "../img/foodfinder-favicon-white 2.png";
import reviewIF from "../img/icon_submit_frame.png";
import reviewI from "../img/icon_submit_pen.png";
import foodfinder from "../img/foodfinder-white-transparent-letters.png";


const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <div className="nav">
                        <button><Link to="/"><img src={logo} alt="foodfinder full logo" className="logo left"/></Link></button>
                        <button><Link to="/"><img src={icon} alt="foodfinder icon" className="icon left"/></Link></button>

                        <img src={foodfinder} alt="home" className="center"/>
                        <button className="btn right"><Link to="/upload">SUBMIT A REVIEW</Link></button>
                        <img src={reviewIF} alt="mobile review icon box" className="right"></img>
                        <Link to="/upload"><img src={reviewI} alt="mobile review icon pencil" className="icon right"></img></Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/upload" element={<Upload />} />
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
        </Router>
    );
};

export default App;