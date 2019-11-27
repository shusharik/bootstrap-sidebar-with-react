import React from 'react';
import { Button } from 'reactstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './index.scss';

const Toggler = (props) => {
    return (
        <Button className="sidebar-toggle-button" onClick={props.togglerClick}>
            <span>
                {props.open ? <FaArrowLeft size="16"/> : <FaArrowRight size="16"/>}
            </span>
        </Button>
    );
}

export default Toggler;

