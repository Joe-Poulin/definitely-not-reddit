import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SidebarItem.css';

const sidebarItem = (props) => {

    var itemCssClass = 'SidebarMenuItem';
    var imgDivCssClass = 'SidebarMenuItemImg';
    var selectedClass = ' Selected';

    if (props.selected) {
        itemCssClass +=  selectedClass;
        imgDivCssClass +=  selectedClass;
    }

    return(
        <div className={itemCssClass}>
            <div className={imgDivCssClass}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className="SidebarMenuItemText">
                {props.text}
            </div>
            <div className="SidebarMenuItemCount">
                {props.count}
            </div>
        </div>
    ) 
};

export default sidebarItem;