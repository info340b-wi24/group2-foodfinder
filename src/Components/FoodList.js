import React from 'react';
//BrowserRouter, Route from react-router-dom later
import { Link } from "react-router-dom";

//component representing the restaurant cards in the home page
function FoodCard(props) {
  return (
    <div className="card">
      <Link to="/restaurant"><img src={props.img} alt={props.name}/></Link>
      <div className="card-title">
          <h2>{props.name}</h2>
          <h2 className="right grade">{props.rating}</h2>
      </div>
      <p>{props.type}</p>
      <p>{props.cost}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default function FoodList(props) {
  const cards = props.foodData.map((food, index) => {
    return (
      <FoodCard key={index} {...food}/>
    )
  });

  return (
    <div className="box food">
      {cards}
    </div>
  )
}