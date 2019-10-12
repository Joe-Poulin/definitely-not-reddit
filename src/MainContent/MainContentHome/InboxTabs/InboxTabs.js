import React from 'react';
import Tab from './Tab/Tab';
import './InboxTabs.css';
import { faInbox, faTag, faUsers } from '@fortawesome/free-solid-svg-icons';

const inboxTabs = (props) => {

    return(
        <div className="InboxTabs HiddenInMobile">
            <Tab icon={faInbox} text="Primary" selected="true"/>
            <Tab icon={faUsers} text="Social"/>
            <Tab icon={faTag} text="Promotions"/>
        </div>
    ) 
};

export default inboxTabs;