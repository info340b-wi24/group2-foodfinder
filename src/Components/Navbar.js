import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/foodfinderlogo.jpg";
import icon from "../img/foodfinder-favicon-white 2.png";
import foodfinder from "../img/foodfinder-white-transparent-letters.png";
import review from "../img/icon_submit.png";

const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <Link to="/"><img src={logo} alt="foodfinder full logo" className="logo left"/></Link>
                <Link to="/"><img src={icon} alt="foodfinder icon" className="icon left"/></Link>

                <img src={foodfinder} alt="home" className="center"/>
                <button className="btn right"><Link to="/upload">SUBMIT A REVIEW</Link></button>
                <Link to="/upload"><img src={review} alt="mobile review icon" className="icon right"/></Link>
            </div>
        </nav>
    );
};

export default Navbar;