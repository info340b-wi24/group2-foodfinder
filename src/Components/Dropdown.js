//component representing the dropdown menus for the filter bar
import React from 'react';

function Dropdown (props) {
    const category = props.category

    return (
        <div className="dropdown">
            <button className="dropbtn">{category.name}</button>
            <div className="dropdown-content">
                {category.list.map((dropContent) => {
                    return <button key={dropContent}>{dropContent}</button>
                })}
            </div>
        </div>
    )
}

export default Dropdown;