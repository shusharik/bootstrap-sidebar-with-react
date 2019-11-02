import React from 'react';
import SidebarHeader from './sidebar-header';
import SidebarMenu from './sidebar-menu';
import SidebarFooter from './sidebar-footer';
import './index.scss';

const Sidebar = (props) => {
    return (
        <nav id="sidebar" className="sidebar-wrapper">
            {props.children}
            <div onMouseEnter={props.handleHover} onMouseLeave={props.handleHover}>
                <div className="sidebar-content">
                    <SidebarHeader className="sidebar-item" userInfo={props.userInfo} changeStatus={props.handleStatusChange}/>
                    <SidebarMenu className="sidebar-item"/>
                </div>
                <SidebarFooter />
            </div>
        </nav>
    )
};

export default Sidebar;