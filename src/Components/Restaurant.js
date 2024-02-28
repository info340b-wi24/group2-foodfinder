//page for detailed restaurant view
import korean_tofu_house_header from "../img/korean_tofu_house_detail.png"
import kenny from "../img/chicken_and_broccoli.png"
import ben from "../img/korean_lunch.png"
import ratings from "../img/ratings.png"

function Restaurant () {
    return (
        <div>
            <div className="restaurant box">
                <img src={korean_tofu_house_header} alt="korean dishes"/>
                <div className="title box">
                    <h1>Korean Tofu House</h1>
                    <h1 className="right grade">C</h1>
                </div>
            </div>

            <div className="content box">
                <div className="detail col">
                    <h2>Details</h2>
                    <p>Korean<br/>
                    $$<br/>
                    0.4 Miles from UW Campus</p>
                </div>

                <div className="rating col">
                    <h2>Rating Distribution</h2>
                    {/* <div className="col">
                        <p className="grade">A</p>
                        <p className="grade">B</p>
                        <p className="grade">C</p>
                        <p className="grade">D</p>
                        <p className="grade">F</p>
                    </div> */}
                    <img src={ratings} alt="rating distribution graph"/>
                </div>
            </div>

            <div className="review box">
                <div className="review-details col">
                    <div className="box">
                        <h2>Kenny Xie</h2>
                        <p className="right grade">B-</p>
                    </div>

                    <p>
                        It was kinda mid tbh, so expensive and not worth the wait but food was pretty good
                    </p>
                </div>

                <img src={kenny} alt="chicken and broccoli"/>
            </div>

            <div className="review box">
                <div className="review-details col">
                    <div className="box">
                        <h2>Ben Bunyatipanon</h2>
                        <p className="right grade">B+</p>
                    </div>

                    <p>
                        It was kinda mid tbh, so expensive and not worth the wait but food was pretty good
                    </p>
                </div>

                <img src={ben} alt="korean lunch set"/>
            </div>

        </div>
    )
}

export default Restaurant;