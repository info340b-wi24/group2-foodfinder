import React from 'react';
import { useNavigate } from 'react-router-dom';

function Upload(props) {
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('restaurantName').value;
        const type = document.getElementById('cuisineType').value;
        const rating = document.getElementById('rating').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        for (let i = 0; i < props.foodList.length; i++) {
            if(name === props.foodList[i].name) {
                alert('The restaurant is already uploaded on the homepage!');
                return;
            }
        }

        if(name.length === 0 || type.length === 0  || rating.length === 0 || description.length === 0) {
            alert('Error, must input information before submit.');
            return;
        }
        
        const newRestaurant = {
            name: name,
            type: type,
            rating: rating,
            cost: price,
            description: description,
            img: "img/FOOD.webp"
          };

        props.applyRestaurantCallback(newRestaurant);
        nav('/home');
    };

    return (
        <div>
            <div className="col box">
                <div className="review-header">
                    <h1>Submit a Review</h1>
                </div>
            
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Restaurant Name</h2>
                        <input id="restaurantName" type="text" placeholder="Restaurant" />
                    </div>

                    <div>
                        <h2>Cuisine Type</h2>
                        <input id="cuisineType" type="text" placeholder="Mexican, Chinese, etc." />
                    </div>

                    <div>
                        <h2>Rating</h2>
                        <input id="rating" type="text" placeholder="Letter Rating" />
                    </div>

                    <div>
                        <h2>Price</h2>
                        <input id="price" type="text" placeholder="$, $$, $$$, etc." />
                    </div>

                    <div>
                        <h2>Review Description</h2>
                        <textarea id="description" placeholder="Review Description"></textarea>
                    </div>

                    <div>
                        <h2>Upload a Photo</h2>
                        <div className="upload">
                            <div>+</div>
                            <p>Drag & drop your photo here</p>
                        </div>
                    </div>

                    <button className="btn" type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}



export default Upload;