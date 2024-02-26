// import logo from "../img/foodfinder-logo-white.png";
import logo from "../img/foodfinderlogo.jpg";
import search from "../img/searchicon.png";
import thai_tom from "../img/thaiTom.jpg";
import placeholder from "../img/FOOD.webp";
import icon from "../img/foodfinder-favicon-white 2.png";

function App() {
    return (
        <div>
            <nav>
                <div className="nav">
                    <button><img src={logo} alt="home"/></button>

                    <button className="btn right">SUBMIT A REVIEW</button>
                </div>
            </nav>

            <header>
                <div className="head col box">
                    <img src={logo} alt="home"/>

                    <div className="search box">
                        <input type="text" placeholder="Search..."/>
                        <button>
                            <img src={search} alt="home"/>
                        </button>
                    </div>
                </div>
            </header>

            <div className="nav box">
                <h1>Looking to explore new restaurants?</h1>

                <div class="dropdown">
                    <button class="dropbtn">Price</button>
                    <div class="dropdown-content">
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Cuisine</button>
                    <div class="dropdown-content">
                        <button>Thai</button>
                        <button>Chinese</button>
                        <button>Mexican</button>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Rating</button>
                    <div class="dropdown-content">
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Distance</button>
                    <div class="dropdown-content">
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                    </div>
                </div>

                <button className="btn right">GO</button>
            </div>
        
            <main>
                <div className="box food">
                    <div className="card">
                        <img src={thai_tom} alt="food"/>
                        <div className="card-title">
                            <h2>Thai Tom</h2>
                            <h2 className="right grade">A</h2>
                        </div>

                        <p>Thai</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={placeholder} alt="food"/>
                        <div className="card-title">
                            <h2>restaurant placeholder</h2>
                            <h2 className="right grade">B</h2>
                        </div>
                        <p>Cuisine placeholder</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={placeholder} alt="food"/>
                        <div className="card-title">
                            <h2>restaurant placeholder</h2>
                            <h2 className="right grade">A-</h2>
                        </div>
                        <p>Cuisine placeholder</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={placeholder} alt="food"/>
                        <div className="card-title">
                            <h2>restaurant placeholder</h2>
                            <h2 className="right grade">C</h2>
                        </div>
                        <p>Cuisine placeholder</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={placeholder} alt="food"/>
                        <div className="card-title">
                            <h2>restaurant placeholder</h2>
                            <h2 className="right grade">C</h2>
                        </div>
                        <p>Cuisine placeholder</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={placeholder} alt="food"/>
                        <div className="card-title">
                            <h2>restaurant placeholder</h2>
                            <h2 className="right grade">C</h2>
                        </div>
                        <p>Cuisine placeholder</p>
                        <p>Cost: $</p>
                        <p>0.5 miles from UW Campus</p>
                    </div>
                </div>
            </main>
    
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

                    <img src={icon} alt="home" className="right"/>
                </div>
            </footer>
        </div>
      );
}

export default App;