import React, { useEffect, useState } from 'react';
import "./Nav.scss";
import { NavLink, useLocation } from 'react-router-dom';

function Nav(props) {
    const [isShow, setIsShow] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname == '/login' || location.pathname == '/signup') {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    })
    return (
        <>
            {isShow && <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/projects">Project</NavLink>
            </div>}
        </>
    );
}

export default Nav;