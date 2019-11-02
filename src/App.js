import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Main from './components/main';
import SliderToggler from './components/toggler';

const userInfo = {
    firstName: 'Shushanik',
    lastName: 'Tovmasyan',
    role: 'Administrator',
    ava: '',
    status: 'Online'
};

const App = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarHovered, setSidebarHovered] = useState(false);

    const setUserInfoStatus = (status) => {
        console.log(status);
    };

    return (
        <div className={`page-wrapper default-theme border-radius-on toggled ${!sidebarOpen ? 'pinned' : ''} ${sidebarHovered ? 'sidebar-hovered' : ''}`}>
            <Sidebar handleHover={() => setSidebarHovered((sidebarOpen ? false : !sidebarHovered))}
                     userInfo={userInfo} handleStatusChange={ (status) => setUserInfoStatus(status)}>
                <SliderToggler open={sidebarOpen} togglerClick={() => setSidebarOpen(!sidebarOpen)}/>
            </Sidebar>
            <Main />
        </div>
    );
}

export default App;