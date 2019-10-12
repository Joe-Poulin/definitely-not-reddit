import React from 'react';
import './RightSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLightbulb, faEdit, faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const rightSidebar = (props) => {

    return(
        <div className="RightSidebar HiddenInMobile">
            <FontAwesomeIcon icon={faCalendar} className="RightIcon Calendar"/>
            <FontAwesomeIcon icon={faLightbulb} className="RightIcon LightBulb"/>
            <FontAwesomeIcon icon={faEdit} className="RightIcon Edit"/>
            <span className="RightIcon NoColor">__</span>
            <FontAwesomeIcon icon={faPlus} className="RightIcon NoColor"/>
            <FontAwesomeIcon icon={faAngleRight} className="RightIcon NoColor"/>
        </div>
    ) 
};

export default rightSidebar;