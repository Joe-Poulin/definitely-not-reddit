import React from 'react';
import './MobileTopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import user from './../assets/default-user.png';

const mobileTopBar = () => {
    return (
        <div className="MobileTopBar OnlyInMobile">
            <div className="SearchBarMobile">
                <div className="SearchBarMobileSettings">
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="SearchBarMobileText">
                    Search Mail
                </div>
                <div className="SearchBarMobileImage">
                    <img src={user} alt="" height="24px" className="UserImage"/>
                </div>
            </div>
            <div className="PrimaryText">
                PRIMARY
            </div>
        </div>
    );
}

export default mobileTopBar;