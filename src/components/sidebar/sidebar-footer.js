import React, { useState } from 'react';
import { DropdownItem, DropdownToggle, Dropdown, DropdownMenu } from 'reactstrap';
import { FaPowerOff, FaCogs, FaBell, FaEllipsisH, FaCheck } from "react-icons/fa";

const SidebarFooter = (props) => {
    const [notificationIsOpen, setNotificationOpen] = useState(false);
    const [languageIsOpen, setLanguageOpen] = useState(false);

    return (
        <div className="sidebar-footer">
            <Dropdown isOpen={notificationIsOpen} toggle={() => setNotificationOpen(!notificationIsOpen)}>
                <DropdownToggle tag="div" className="dropdown-button position-relative">
                    <span><FaBell size="16"/></span>
                    <span className="badge notification">3</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        Notifications
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem className="notifications">
                        <div className="notification-content">
                            <div className="icon border border-success">
                                <span className="text-success">
                                    <FaCheck size="16"/>
                                </span>
                            </div>
                            <div className="content">
                                <div className="notification-detail">Lorem ipsum dolor sit amet consectetur
                                    adipisicing
                                    elit. In totam explicabo
                                </div>
                                <div className="notification-time">
                                    6 minutes ago
                                </div>
                            </div>
                        </div>
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                        View all notifications
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={languageIsOpen} toggle={() => setLanguageOpen(!languageIsOpen)}>
                <DropdownToggle tag="div" className="dropdown-button">
                    <span><FaCogs size="16"/></span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Language
                    </DropdownItem>
                    <DropdownItem>
                        My profile
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <div className="dropdown-button">
                <a href="#">
                    <i>
                        <FaPowerOff size="16"/>
                    </i>
                </a>
            </div>
            <div className="pinned-footer">
                <a href="#">
                    <i>
                        <FaEllipsisH size="16"/>
                    </i>
                </a>
            </div>
        </div>
    );
}

export default SidebarFooter;