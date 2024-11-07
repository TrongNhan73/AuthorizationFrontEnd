import React from 'react';
import "./Nav.scss";
import { NavLink } from 'react-router-dom';

function nav(props) {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">User</NavLink>
            <NavLink to="/projects">Project</NavLink>
        </div>
    );
}

export default nav;