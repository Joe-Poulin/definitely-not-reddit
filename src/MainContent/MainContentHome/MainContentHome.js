import React from 'react';
import MainContentHeader from './MainContentHeader/MainContentHeader';
import InboxTabs from './InboxTabs/InboxTabs';
import Inbox from './Inbox/Inbox';
import './MainContentHome.css'
import Spinner from '../../Dumb/Spinner/Spinner';
import MobileTopBar from '../../MobileTopBar/MobileTopBar';

const mainContentHome = (props) => {

    var content = '';

    if (props.gettingPosts) {
        content = <Spinner/>

    } else {
        content = <div className="Scroll">
            <InboxTabs/>
            <Inbox posts={props.posts}/>
        </div>
    }

    return (
        <div className="MainContentHome">
            <MobileTopBar className="OnlyInMobile"/>
            <MainContentHeader/>
            {content}
        </div>
    )
};

export default mainContentHome;