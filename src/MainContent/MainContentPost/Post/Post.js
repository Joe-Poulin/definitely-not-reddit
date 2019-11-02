import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import './Post.css';
import senderImg from './../../../assets/sender.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DecoderService from './../../../Services/DecoderService';
import VideoPlayer from '../../../Dumb/VideoPlayer/VideoPlayer';

const post = (props) => {

    var content = null;

    console.log(props.post);

    if (props.post.embedded_html) {
        console.log('here1');
        // if a video
        const html  = DecoderService.decodeHtml(props.post.embedded_html);
        content = <div dangerouslySetInnerHTML={{__html: html}} style={{marginRight: '10px'}}></div>
    } else if (props.post.self_text_html) {
        console.log('here2');
        // if a text post
        const html  = DecoderService.decodeHtml(props.post.self_text_html);
        content = <div dangerouslySetInnerHTML={{__html: html}} style={{marginRight: '10px'}}></div>
        // content = <div style={{marginRight: '10px'}}>{html}</div>
    } else if (props.post.url && !props.post.video) {
        console.log('here3');
        // if an image
        content = <img src={props.post.url} className="PostImage"/>

        console.log()
    } else if (props.post.video) {
        // a video, that's not embedded_html
        console.log('here4');
        content = <VideoPlayer video={props.post.video}/>
    }

    var score = props.post.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let comments = [];

    if (props.postComments.length > 0) {
        comments = <div className="Comments">
            {props.postComments}
        </div>
    }

    let loadComments = '';

    if (comments.length == 0) {
        loadComments = <div className="LoadComments"
                onClick={() => props.loadCommentsClicked(props.post)}>
                Load comments
            </div>
    }

    return(
        <div>
           <PostHeader postTitle={props.post.title}/>
           <div className="PostMain">
                <img src={senderImg} className="HiddenInMobile" height="40px" width="40px"/>
                <div className="PostMainHeader">
                    {/* <img src={senderImg} className="OnlyInMobile" height="40px" width="40px"/> */}
                    <div className="PostMainHeaderTop">
                        <div className="PostMainHeaderTopLeft">
                            <div className="SubredditName">
                                {props.post.subreddit}
                            </div>
                            <div className="SubredditLink HiddenInMobile">
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
                    {loadComments}
                    {comments}
                </div>
           </div>
        </div>
    ) 
};

export default post;