import React from 'react';
import './PostHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPrint, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const postHeader = (props) => {

    return(
        <div className="PostHeader">
            <div className="PostHeaderLeft">
                <div className="PostTitle">
                    {props.postTitle}
                </div>
                <div className="InboxTag">
                    Inbox&nbsp;<FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
            <div className="PostHeaderRight">
                <div className="PostHeaderButtons">
                    <FontAwesomeIcon icon={faPrint} className="IconMed"/>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="IconMed"/>
                </div>
            </div>
        </div>
    ) 
};

export default postHeader;