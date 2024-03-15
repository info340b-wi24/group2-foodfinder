import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <Link to="/home"><img src="../img/foodfinderlogo.jpg" alt="foodfinder full logo" className="logo left"/></Link>
                <Link to="/home"><img src="../img/foodfinder-favicon-white 2.png" alt="foodfinder icon" className="icon left"/></Link>

                <img src="../img/foodfinder-white-transparent-letters.png" alt="home" className="center"/>
                <button className="btn right"><Link to="/upload">Share a restaurant</Link></button>
                <Link to="/upload"><img src="../img/icon_submit.png" alt="mobile review icon" className="icon right"/></Link>
            </div>
        </nav>
    );
};

export default Navbar;