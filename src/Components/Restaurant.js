import React from 'react';
//page for detailed restaurant view
import { useParams } from 'react-router-dom';

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

    const userPick = useParams().restaurant;
    let restaurants = props.foodList;
    let restaurantChoice = {};

    for (let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].name === userPick) {
            restaurantChoice = restaurants[i];
        }
    }

    return (
        <div>
           <div className="restaurant box">
                <img src={restaurantChoice.img} alt={restaurantChoice.name} />
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

                <img src="../img/chicken_and_broccoli.png" alt="chicken and broccoli"/>
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

                <img src="../img/korean_lunch.png" alt="korean lunch set"/>
            </div>
        </div>
    )
}

export default Restaurant;