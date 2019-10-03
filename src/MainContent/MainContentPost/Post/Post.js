import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import './Post.css';
import senderImg from './../../../assets/sender.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DecoderService from './../../../Services/DecoderService';

const post = (props) => {

    var content = null;

    if (props.post.embedded_html) {
        // if a video
        const html  = DecoderService.decodeHtml(props.post.embedded_html);
        content = <div dangerouslySetInnerHTML={{__html: html}} style={{marginRight: '10px'}}></div>
    } else if (props.post.self_text_html) {
        // if a text post
        const html  = DecoderService.decodeHtml(props.post.self_text_html);
        content = <div dangerouslySetInnerHTML={{__html: html}} style={{marginRight: '10px'}}></div>
        // content = <div style={{marginRight: '10px'}}>{html}</div>
    } else if (props.post.url) {
        // if an image
        content = <img src={props.post.url} className="PostImage"/>
    } 

    var score = props.post.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return(
        <div>
           <PostHeader postTitle={props.post.title}/>
           <div className="PostMain">
                <img src={senderImg} height="40px" width="40px"/>
                <div className="PostMainHeader">
                    <div className="PostMainHeaderTop">
                        <div className="PostMainHeaderTopLeft">
                            <div className="SubredditName">
                                {props.post.subreddit}
                            </div>
                            <div className="SubredditLink">
                                &nbsp;&lt;https://www.reddit.com/{props.post.subreddit_with_prefix}&gt;&nbsp;
                            </div>
                            <div className="PostScore">
                                +{score}
                            </div>
                        </div>
                        <div className="PostMainHeaderTopRight">
                        </div>
                    </div>
                    <div className="PostMainHeaderBottom">
                        to me&nbsp;<FontAwesomeIcon className="Icon" icon={faAngleDown}/>
                    </div>
                    <div className="PostMainContent">
                        {content}
                    </div>
                </div>
                
           </div>
        </div>
    ) 
};

export default post;