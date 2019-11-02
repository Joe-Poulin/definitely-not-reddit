import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MainContentPostHeader.css';
import { faCaretDown, faEllipsisV, faAngleLeft, faAngleRight, faKeyboard, faCog, faArrowLeft, faDownload, faExclamationCircle, faTrash, faArchive, faClock, faBookmark, faFileDownload, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import '../../../App.css';

const mainContentPostHeader = (props) =>{
        return(
            <div className="MainContentHeader">
                <div className="SubMainContentHeaderContainerMobile">
                    <Link className="BackContainer" to="/">
                        <FontAwesomeIcon icon={faArrowLeft} className="Icon IconMed"/>
                    </Link>
                    <div style={{marginRight: '10px'}}>
                        <FontAwesomeIcon icon={faDownload} className="Icon IconMed"/>
                        <FontAwesomeIcon icon={faTrash} className="Icon IconMed"/>
                        <FontAwesomeIcon icon={faEnvelope} className="Icon IconMed"/>
                        <FontAwesomeIcon icon={faEllipsisH} className="Icon IconMed"/>
                    </div>
                </div>

                <div className="SubMainContentHeaderContainer HiddenInMobile">
                    <Link className="BackContainer" to="/">
                        <FontAwesomeIcon icon={faArrowLeft} className="Icon IconMed"/>
                    </Link>
                    <FontAwesomeIcon icon={faDownload} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faExclamationCircle} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faTrash} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faArchive} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faClock} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faFileDownload} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faBookmark} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faEllipsisV} className="Icon IconMed"/>
                </div>

                <div className="SubMainContentHeaderContainer HiddenInMobile">
                    <span className="EmailCountPost">{props.post.index + 1} of 3,441</span>
                    <div className="BackContainer"
                            onClick={() => props.previousClicked(props.post.key)}>
                        <FontAwesomeIcon icon={faAngleLeft} className="Icon IconMed LeftAngle"/>
                    </div>
                    <div className="BackContainer"
                            onClick={() => props.nextClicked(props.post.key)}>
                        <FontAwesomeIcon icon={faAngleRight} className="Icon IconMed RightAngle"/>
                    </div>           
                    <FontAwesomeIcon icon={faKeyboard} className="Icon IconMed"/>
                    <FontAwesomeIcon icon={faCaretDown} className="Icon IconSm"/>
                    <FontAwesomeIcon icon={faCog} className="Icon IconMed IconLast"/>
                </div>
            </div>
        );
    
};

export default mainContentPostHeader;