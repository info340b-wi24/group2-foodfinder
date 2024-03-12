//represents individual review comments on restaurant detail pages.
import React from 'react';

function Review(props) {
    return (
        <div className="review box">
                <div className="review-details col">
                    <div className="box">
                        <h2>{props.name}</h2>
                        <p className="right grade">{props.grade}</p>
                    </div>

                    <p>
                        {props.comment}
                    </p>
                </div>

                <img src={props.img}/>
            </div>
    )
}

export default Review