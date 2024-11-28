import React, { useEffect, useState, useContext } from 'react';
import "./Nav.scss";
import { NavLink, useLocation } from 'react-router-dom';
import { userContext } from '../../context/userContext';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavHeader(props) {
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
            // <div className="topnav">
            //     <NavLink to="/">Home</NavLink>
            //     <NavLink to="/users">User</NavLink>
            //     <NavLink to="/projects">Project</NavLink>
            // </div>



            <div className='nav-header'>
                <Navbar expand="lg" bg='header' className="" variant='dark'>
                    <div className='container'>
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" className={'nav-link'}>Home</NavLink>
                                <NavLink to="/users" className={'nav-link'}>User</NavLink>
                                <NavLink to="/projects" className={'nav-link'}>Project</NavLink>
                            </Nav>
                            <Nav>
                                <Nav.Item className='nav-link'>Welcome</Nav.Item>
                                <NavDropdown title="Setting" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

        );
    else
        return <></>
}

export default NavHeader;