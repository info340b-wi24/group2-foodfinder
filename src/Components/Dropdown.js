//component representing the dropdown menus for the filter bar
import React from 'react';

function Dropdown (props) {
    const category = props.category

    const dropContent = category.list.map((dropItem) => {
        return <button key={dropItem} onClick={() => {props.callback(dropItem)}}>{dropItem}</button>
    });

    return (
        <div className="dropdown">
            <button className="dropbtn">{category.name}</button>
            <div className="dropdown-content">
                {dropContent}
            </div>
        </div>
    )
}

export default Dropdown;