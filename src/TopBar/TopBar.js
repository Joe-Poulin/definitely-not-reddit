import React from 'react';
import logo from './../assets/gmail-logo.png';
import settings from './../assets/settings-bars.png';
import questionMark from './../assets/question-mark.png';
import grid from './../assets/grid.png';
import user from './../assets/default-user.png';
import './TopBar.css';
import { Link } from "react-router-dom";

const topbar = () => {
    return(
        <div className="TopBar">
            <div className="TopBarChild Settings">
                <img src={settings} alt="" height="17px" className="SettingsLogo"/>
            </div>
            <Link  className="TopBarChild Logo" to="/">
                <img src={logo} alt=""/>
            </Link> 
            <div className="TopBarChild Search">
                <input type="text"
                    placeholder="Search mail"
                    className="SearchBar"
                    disabled/>
            </div>
            <div className="TopBarChild Question">
                <img src={questionMark} alt="" height="25px" className="QuestionMark"/>
            </div>
            <div className="TopBarChild Grid">
                <img src={grid} alt="" height="20px" className="GridImage"/>
            </div>
            <div className="TopBarChild User">
                <img src={user} alt="" height="30px" className="UserImage"/>
            </div>
        </div>
    ) 
};

export default topbar;