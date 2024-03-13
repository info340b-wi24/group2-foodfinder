import React from 'react';
//BrowserRouter, Route from react-router-dom later
import { Link } from "react-router-dom";

//component representing the restaurant cards in the home page
function FoodCard(props) {
  let restaurant = props.restaurant;
  return (
    <div className="card">
      <Link to={"/home/"+encodeURIComponent(restaurant.name)}><img src={"../"+restaurant.img} alt={restaurant.name}/></Link>
      <div className="card-title">
          <h2>{restaurant.name}</h2>
          <h2 className="right grade">{restaurant.rating}</h2>
      </div>
      <p>{restaurant.type}</p>
      <p>{restaurant.cost}</p>
      <p>{restaurant.description}</p>
    </div>
  )
}

export default function FoodList(props) {
  const cards = props.foodData.map((food) => {
    return (
      <FoodCard key={food.name} restaurant={food} />
    )
  });

  return (
    <div className="box food">
      {cards}
    </div>
  )
}