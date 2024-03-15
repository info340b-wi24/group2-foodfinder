//represents individual review comments on restaurant detail pages.
import React from 'react';

export default function Reviews(props) {
    let reviewList = null;
    if (props.reviews !== undefined) {
        reviewList = props.reviews.map((review) => {
            return (
              <Review key={review.name} review={review} />
            )
        });
    }
  
    return (
      <div className="col box">
        {reviewList}
      </div>
    );
}

function Review(props) {
    return (
        <div className="review box">
            <div className="review-details col">
                <div className="box">
                    <h2>{props.review.name}</h2>
                    <p className="right grade">{props.review.rating}</p>
                </div>
                <p>
                    {props.review.comment}
                </p>
                
            </div>
            <img src={props.review.img} alt={props.review.name}/>
        </div>
    );
  }
  
  