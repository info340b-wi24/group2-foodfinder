import React from 'react';

function Upload() {
    return (
        <div>
            <header>
            <h1>Upload Page</h1>
            </header>
            
            <div>
                <h3> Want to upload a restaurant? </h3>
                <input id="restaurantName" type="text" placeholder="Restaurant Name" />
                <hr />
                <input id="cuisineType" type="text" placeholder="Cuisine Type" />
                <hr />
                <input id="rating" type="text" placeholder="Letter Rating" />
                <hr />
                <input id="description" type="text" placeholder="Description" />
                <hr />
                <h3> Upload a Photo </h3>
                <hr />
                <img src="img/drag-drop-file-upload.png" alt="file upload placeholder" />
                <hr />
                <button id="submitBtn">Submit</button>
            </div>
        </div>
    );
}

export default Upload;