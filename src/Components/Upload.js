import React from 'react';
import { useNavigate } from 'react-router-dom';

function Upload(props) {
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('restaurantName').value;
        const type = document.getElementById('cuisineType').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;

        for (let i = 0; i < props.foodList.length; i++) {
            if(name === props.foodList[i].name) {
                alert('The restaurant is already uploaded on the homepage!');
                return;
            }
        }

        if(name.length === 0 || type.length === 0 || description.length === 0) {
            alert('Please input all information before submitting!');
            return;
        }
        
        const newRestaurant = {
            name: name,
            type: type,
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
                            <select id="cuisineType">
                                <option value="" disabled selected hidden>Select Cuisine Type</option>
                                <option value="Mexican" >Mexican</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Thai">Thai</option>
                                <option value="Korean">Korean</option>
                                <option value="Other">Other</option>
                            </select>
                    </div>

                    <div>
                        <h2>Price</h2>
                            <select id="price">
                                <option value="" disabled selected hidden>Select Price</option>
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                            </select>
                    </div>

                    <div>
                        <h2>Location Description</h2>
                        <textarea id="description" placeholder="Review Description" style={{border: '1px solid black'}}></textarea>
                    </div>

                    <div>
                        <h2>Upload a Photo</h2>
                        <div className="upload">
                            <input type="file" accept="image/*" id="photoUpload" style={{color: 'black'}} />
                            <label htmlFor="photoUpload" className="upload-btn">Upload Photo</label>
                        </div>
                    </div>

                    <button className="btn" type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}

export default Upload;