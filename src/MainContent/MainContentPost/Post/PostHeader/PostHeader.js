import React from 'react';
import './PostHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPrint, faExternalLinkAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const postHeader = (props) => {

    return(
        <div className="PostHeader">
            <div className="PostHeaderLeft">
                <div className="PostTitle">
                    {props.postTitle}
                </div>
                <div className="InboxTag">
                    Inbox&nbsp;<FontAwesomeIcon icon={faTimes} className="HiddenInMobile"/>
                </div>
            </div>
            <div className="PostHeaderRight">
                <div className="PostHeaderButtons">
                    <FontAwesomeIcon icon={faPrint} className="IconMed HiddenInMobile"/>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="IconMed HiddenInMobile"/>
                    <FontAwesomeIcon icon={faStar} className="IconMed OnlyInMobile"/>
                </div>
            </div>
        </div>
    ) 
};

export default postHeader;