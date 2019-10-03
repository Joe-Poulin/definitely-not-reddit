import React from 'react';
import './Tab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tab = (props) => {

    var tabClass = 'Tab';
    if (props.selected) tabClass += ' SelectedTab';

    return(
        <div className={tabClass}>
            <FontAwesomeIcon icon={props.icon} className="TabIcon"/>
            <span className="TabText">{props.text}</span>
        </div>
    ) 
};

export default tab;