import React from 'react';

function Upload() {
    return (
        <div>
            <header>
            <h1>Submit a Review</h1>
            </header>
        
            <div>
                <div>
                    <h1 style={{ color: 'black' }}>Want to upload a restaurant?</h1>
                </div>

                <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                    <input id="restaurantName" type="text" placeholder="Restaurant Name" style={{ width: '100%', border: 'none', outline: 'none' }} />
                </div>
                <hr />

                <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                    <input id="cuisineType" type="text" placeholder="Cuisine Type" style={{ width: '100%', border: 'none', outline: 'none' }} />
                </div>
                <hr />

                <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                    <input id="rating" type="text" placeholder="Letter Rating" style={{ width: '100%', border: 'none', outline: 'none' }} />
                </div>
                <hr />

                <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                    <input id="description" type="text" placeholder="Description" style={{ width: '100%', border: 'none', outline: 'none' }} />
                </div>
                <hr />

                <div>
                    <h2 style={{ color: 'black' }}>Upload a Photo</h2>   
                </div>
                <hr />

                <div style={{ border: '2px dashed #aaaaaa', borderRadius: '5px', padding: '20px', textAlign: 'center', width: '150px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '36px', marginBottom: '10px', color: 'black'  }}>+</div>
                        <p style={{ color: 'black' }}>Drag & drop your photo here</p>
                </div>

                <div>
                <button style={{ marginTop: '10px', backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '32px' }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;