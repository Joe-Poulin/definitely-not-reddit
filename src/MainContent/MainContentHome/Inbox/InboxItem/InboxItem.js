import React from 'react';
import './InboxItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

const inboxItem = (props) => {

    var itemClass = 'InboxItem';
    var subredditClass = 'Subreddit InboxText';
    var postTitleClass = 'Title InboxText';
    var postScoreClass = 'PostScore InboxText';

    if (props.read) {
        itemClass += ' Read';
        subredditClass += ' Read';
        postTitleClass += ' Read';
        postScoreClass += ' Read';
    }

    if (window.screen.width < 480) {
        postScoreClass += ' MobileRowRight';
    }

    var score = props.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className={itemClass}
            onClick={() => props.history.push(props.id)}>
            <FontAwesomeIcon className="InboxIcon" icon={faSquare}/>
            <FontAwesomeIcon className="InboxIcon InboxIconLast HiddenInMobile" icon={faStar}/>
            <div className="Expandable HiddenInMobile">
                <span className={subredditClass}>{props.subreddit}</span>
                <span className={postTitleClass}>{props.title}</span>
                <span className={postScoreClass}>+{score}</span>
            </div>
            <div className="ExpandableMobile OnlyInMobile">
                <div className="MobileRow">
                    <span className={subredditClass}>{props.subreddit}</span>
                    <span className={postScoreClass}>+{score}</span>
                </div>
                <div className="MobileRow">
                    <span className={postTitleClass}>{props.title}</span>
                    <FontAwesomeIcon className="InboxIcon MobileRowRight" icon={faStar}/>
                </div>
            </div>
        </div>
    ) 
};

export default withRouter(inboxItem);