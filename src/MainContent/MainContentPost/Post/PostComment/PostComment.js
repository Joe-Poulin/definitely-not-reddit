import React from 'react';
import './PostComment.css';

const postComment = (props) => {
    var score = '';

    if (props.comment.score) {
        score = props.comment.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var commentClass = 'PostComment'

    // if (props.comment.index % 2 == 0) {
    //     commentClass += ' CommentDark'
    // }

    return(
        <div className={commentClass}>
            <div className="PostCommentAuthor">{props.comment.author}</div>
            <div className="PostCommentScore">+{score}</div>
            <div className="PostCommentComment" dangerouslySetInnerHTML={{__html: props.comment.body_html}}></div>
        </div>
    );
}

export default postComment;