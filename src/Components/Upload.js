import React from 'react';

function Upload() {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Im getting these user inputs, but Idk how to use it in home.js
        console.log("resturant: " + document.getElementById('restaurantName').value);
        console.log("cuisine: " + document.getElementById('cuisineType').value);
        console.log("rating: " + document.getElementById('rating').value);
        console.log("description: " + document.getElementById('description').value);
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
                        <h2>Review Description</h2>
                        <textarea id="description" placeholder="Review Description"></textarea>
                    </div>

                    <div>
                        <h2>Upload a Photo</h2>
                        <div style={{ border: '2px dashed #aaaaaa', borderRadius: '5px', padding: '20px', textAlign: 'center', width: '150px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ fontSize: '36px', marginBottom: '10px', color: 'black'  }}>+</div>
                                <p style={{ color: 'black' }}>Drag & drop your photo here</p>
                        </div>
                    </div>

                    <button className="btn" type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}



export default Upload;