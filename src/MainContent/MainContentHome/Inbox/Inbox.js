import React from 'react';
import InboxItem from './InboxItem/InboxItem';

const inbox = (props) => {

    var inboxItems = [];

    if (props.posts) {
        inboxItems = props.posts.map(p => {
            return <InboxItem id={p.key}
                title={p.title}
                subreddit={p.subreddit}
                score={p.score}
                key={p.key}
                read={p.read}/>
        });
    }

    return(
        <div>
            {inboxItems}
        </div>
    ) 
};

export default inbox;