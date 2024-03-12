import React from 'react';
import icon from "../img/foodfinder-favicon-white 2.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer box">
                <div className="about col box">
                    <h1>ABOUT</h1>
                    <p>
                        FoodFinder was built out of all of our team member's shared love for trying new foods, especially local small business restaurants. The goal of FoodFinder is to allow users to view reviews written for students by the students. Browse reviews written by students or upload your own review today!
                    </p>
                </div>

                <div className="credits col box">
                    <h1>MADE BY</h1>
                    <ul>
                        <li>Ryan Nishi</li>
                        <li>Ben Bunyatipanon</li>
                        <li>Kenny Xie</li>
                        <li>Sean Yoon</li>
                    </ul>
                </div>

                <img src={icon} alt="foodfinder icon" className="right"/>
            </div>
        </footer>
    );
};

export default Footer;