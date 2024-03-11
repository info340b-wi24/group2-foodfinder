//page for detailed restaurant view
import korean_tofu_house_header from "../img/korean_tofu_house_detail.png"
import kenny from "../img/chicken_and_broccoli.png"
import ben from "../img/korean_lunch.png"

function Restaurant () {
    //map list of comments to a const then replace example reviews in return.

    return (
        <div>
            <div className="restaurant box">
                <img src={korean_tofu_house_header} /> {/* props.img */}
                <div className="title box">
                    <h1>Korean Tofu House</h1> {/* props.name */}
                    <h1 className="right grade">C</h1> {/* props.rating */}
                </div>
            </div>

            <div className="content box">
                <div className="detail col">
                    <h2>Details</h2>
                    <p>Korean<br/> {/* props.type */}
                    $$<br/> {/* props.cost */}
                    0.4 Miles from UW Campus</p> {/* props.description */}
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