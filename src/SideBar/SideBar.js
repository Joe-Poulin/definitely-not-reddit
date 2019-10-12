import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import plus from './../assets/plus.png'
import { faInbox, faStar, faClock, faPaperPlane, faFile, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const sidebar = () => {
    return(

        <div className="Sidebar HiddenInMobile">
            <div className="ComposeButton">
                <div className="ComposeButtonPlus">
                    <img src={plus} alt=""/>
                </div>
                <div className="ComposeButtonText">
                    Compose
                </div>
            </div>
            <div className="SidebarMenu">
                <SidebarItem icon={faInbox} text="Inbox" count="1,570" selected={true}/>
                <SidebarItem icon={faStar} text="Starred"/>
                <SidebarItem icon={faClock} text="Snoozed"/>
                <SidebarItem icon={faPaperPlane} text="Sent"/>
                <SidebarItem icon={faFile} text="Drafts"/>
                <SidebarItem icon={faAngleDown} text="More"/>
            </div>
        </div>
    ) 
};

export default sidebar;