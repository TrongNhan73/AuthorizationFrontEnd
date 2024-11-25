import React, { useEffect, useState, useContext } from 'react';
import "./Nav.scss";
import { NavLink, useLocation } from 'react-router-dom';
import { userContext } from '../../context/userContext';
function Nav(props) {
    const { dataUser } = useContext(userContext);
    // const [isShow, setIsShow] = useState(false);
    const location = useLocation();
    // useEffect(() => {
    //     if (location.pathname == '/login' || location.pathname == '/signup') {
    //         setIsShow(false);
    //     } else {
    //         setIsShow(true);
    //     }
    // })
    if (location.pathname === '/' || dataUser && dataUser.isAuthenticated)
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to="/projects">Project</NavLink>
            </div>
        );
    else
        return <></>
}

export default Nav;