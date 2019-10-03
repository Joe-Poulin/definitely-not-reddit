import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MainContentHeader.css';
import { faSquare, faRedo, faCaretDown, faEllipsisV, faAngleLeft, faAngleRight, faKeyboard, faCog } from '@fortawesome/free-solid-svg-icons';

const mainContentHeader = (props) => {

    return(
        <div className="MainContentHeader">
            <FontAwesomeIcon icon={faSquare} className="Icon IconMed"/>
            <FontAwesomeIcon icon={faCaretDown} className="Icon IconSm"/>
            <FontAwesomeIcon icon={faRedo} className="Icon IconMed"/>
            <FontAwesomeIcon icon={faEllipsisV} className="Icon IconMed"/>
            <span className="EmailCount">1-50 of 3,441</span>
            <FontAwesomeIcon icon={faAngleLeft} className="Icon IconMed"/>
            <FontAwesomeIcon icon={faAngleRight} className="Icon IconMed"/>
            <FontAwesomeIcon icon={faKeyboard} className="Icon IconMed"/>
            <FontAwesomeIcon icon={faCaretDown} className="Icon IconSm"/>
            <FontAwesomeIcon icon={faCog} className="Icon IconMed IconLast"/>
        </div>
    ) 
};

export default mainContentHeader;