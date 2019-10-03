import React from 'react';
import MainContentHeader from './MainContentHeader/MainContentHeader';
import InboxTabs from './InboxTabs/InboxTabs';
import Inbox from './Inbox/Inbox';
import './MainContentHome.css'

const mainContentHome = (props) => {

    return (
        <div className="MainContentHome">
            <MainContentHeader/>
            <div className="Scroll">
                <InboxTabs/>
                <Inbox posts={props.posts}/>
            </div>
        </div>
    )
};

export default mainContentHome;