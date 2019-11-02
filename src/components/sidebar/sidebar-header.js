import React from 'react';
import { FaCircle } from "react-icons/fa";
import userPic from './img/user.jpg';

const SidebarHeader = (props) => {
    const { firstName, lastName, role, status, ava} = props.userInfo;

    return (
        <div className="sidebar-header">
            <div className="d-flex flex-nowrap">
                <div className="user-pic">
                    <img src={ava || userPic} alt="User picture" />
                </div>
                <div className="user-info">
                    <span className="user-name">{firstName} <strong>{lastName}</strong></span>
                    <span className="user-role">{role}</span>
                    <span className="user-status">
                        <FaCircle className='fa-icon' size='8'/>
                        <span>{status}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidebarHeader;