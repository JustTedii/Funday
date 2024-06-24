import React from 'react';
import './userNav.css';

const DropDownProfile = () => {
    return ( 
        <div className="dropDownProfile">
            <ul className="inner-menu">
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </div>
     );
}
 
export default DropDownProfile;