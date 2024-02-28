// import logo from "../img/foodfinder-logo-white.png";
import logo from "../img/foodfinderlogo.jpg";
import search from "../img/searchicon.png";
import korean_tofu_house from "../img/korean_tofu_house.png"
import thai_tom from "../img/thaiTom.jpg";
import placeholder from "../img/FOOD.webp";

function Home() {
    return (
        <div>
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
                        <img src={korean_tofu_house} alt="korean food"/>
                        <div className="card-title">
                            <h2>Korean Tofu House</h2>
                            <h2 className="right grade">C</h2>
                        </div>

                        <p>Korean</p>
                        <p>Cost: $$</p>
                        <p>0.4 miles from UW Campus</p>
                    </div>

                    <div className="card">
                        <img src={thai_tom} alt="pad thai"/>
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
        </div>
      );
}

export default Home;