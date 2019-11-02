import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { FaTachometerAlt, FaAngleRight, FaUserFriends, FaLayerGroup } from "react-icons/fa";

let menu = [{
    key: 'dashboard',
    title: 'Dashboard'
}, {
    key: 'users',
    title: 'Users',
    link: '',
    submenu: [{
        key: 'administrators',
        title: 'Administrators'
    }, {
        key: 'visitors',
        title: 'Visitors'
    }]
}, {
    key: 'groups',
    title: 'Groups',
    link: '',
    submenu: [{
        key: 'payed',
        title: 'Pro'
    }, {
        key: 'free',
        title: 'Free'
    }]
}];

const SidebarMenu = (props) => {
    const [activeItem, setItem] = useState(-1);
    const [activeSubItem, setSubItem] = useState(-1);

    const getMenuItemIcon = (key) => {
        switch (key) {
            case 'dashboard' :
                return <FaTachometerAlt className='fa-icon' size='16' />;
            case 'users':
                return <FaUserFriends className='fa-icon' size='16' />;
            case 'groups':
                return <FaLayerGroup className='fa-icon' size='16' />;
        }
    }

    return (
        <div className={`sidebar-menu ${props.className}`}>
            <ul>
                {menu.map( (item, index) => {
                    return (
                        <li key={index} className={`sidebar-dropdown ${index === activeItem ? 'active' : ''}`}>
                            <a href={item.link || '#'} onClick={() => {setSubItem(-1); setItem((index === activeItem ? -1 : index))}}>
                                <i className="menu-icon">{getMenuItemIcon(item.key)}</i>
                                <span className="menu-text">{item.title}</span>
                                {item.submenu ? <span className="caret"><FaAngleRight size="16"/></span> : ''}
                            </a>
                            <Collapse isOpen={index === activeItem}>
                                {item.submenu ? (<div className="sidebar-submenu">
                                    <ul>
                                        {item.submenu.map( (i, idx) => (
                                            <li key={idx} className={`${idx === activeSubItem ? 'active' : ''}`}>
                                                <a href={i.link || '#'} onClick={() => setSubItem((idx === activeSubItem ? -1 : idx))}>{i.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>) : ''}
                            </Collapse>
                        </li>
                    )})
                }}
            </ul>
        </div>
    );
}

export default SidebarMenu;