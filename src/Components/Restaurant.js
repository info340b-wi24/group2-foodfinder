import React from 'react';
//page for detailed restaurant view
import { useParams, useNavigate } from 'react-router-dom';
import Review from './Review.js';
function Restaurant (props) {
    //map list of comments to a const then replace example reviews in return.
    /* review function fpr future development
    function reviews(props) {
        <div className="review box">
            <div className="review-details col">
                <div className="box">
                    <h2>{props.name}</h2>
                    <p className="right grade">B-</p>
                </div>

                <p>{props.comment}</p>
            </div>

            <img src={props.img} alt={props.restaurant}/>
        </div>
    }*/
    const navHook = useNavigate();

    const handleReview = (e) => {
        e.preventDefault();
        const name = document.getElementById('commenter').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        if(name.length === 0 || rating.length === 0 || comment.length === 0) {
            alert('Please input all information for comment!');
            return;
        }
        for (let i = 0; i < props.reviews.length; i++) {
            if(name === props.reviews[i].name) {
                alert('You already added comments!');
                return;
            }
        }
        const newContent = {
            name: name,
            rating: rating,
            comment: comment,
            img: "img/FOOD.webp",
            page: userPick
        };

        props.callbackFunc(newContent);
        navHook('/restaurant/'+userPick);
    }

    const userPick = useParams().restaurant;
    const restaurants = props.foodList;
    let restaurantChoice = {};
    let reviewList = [];

    if (props.reviews !== undefined) {
        reviewList = props.reviews.filter((review) => review.page === userPick);
    }

    for (let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].name === userPick) {
            restaurantChoice = restaurants[i];
        }
    }

    return (
        <div>
           <div className="restaurant box">
                <img src={"../"+restaurantChoice.img} alt={restaurantChoice.name} />
                <div className="title box">
                    <h1>{restaurantChoice.name}</h1>
                    <h1 className="right grade">{restaurantChoice.rating}</h1>
                </div>
            </div>

            <div className="content box">
                <div className="detail col">
                    <h2>Details</h2>
                    <p>{restaurantChoice.type}<br/>
                    {restaurantChoice.cost}<br/>
                    {restaurantChoice.description}</p>
                </div>

                <div className="col box">
                    <h2 className="review-header">Leave a comment</h2>
                    
                    <form onSubmit={handleReview}>
                        <div className="review-details">
                            <div>
                                <p>Name</p>
                                <input id="commenter" type="text"/>
                            </div>
                            <div>
                                <p>Rating</p>
                                <select id="rating">
                                    <option value="" disabled selected hidden>Select Rating</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="F">F</option>
                                </select>
                            </div>
                            <div>
                                <p>Comment</p>
                                <textarea id="comment" type="text"/>
                            </div>
                            <div>
                                <p>Image</p>
                                <input type="file" accept="image/*" id="photoUpload" style={{color: 'black'}} />
                            </div>
                            <button className="btn" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <Review reviews={reviewList} />
        </div>
        
    )
}

export default Restaurant;