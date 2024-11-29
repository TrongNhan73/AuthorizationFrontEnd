import React, { useEffect, useState, useContext } from 'react';
import "./Nav.scss";
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router";
import { userContext } from '../../context/userContext';
import { logOutUser } from '../../service/userService';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavHeader(props) {
    const { dataUser, setsDataUser } = useContext(userContext);
    let naviagte = useNavigate();

    // const [isShow, setIsShow] = useState(false);
    const location = useLocation();
    const handleLogOut = async () => {
        let data = await logOutUser();
        if (data && +data.EC === 0) {
            setsDataUser({
                isLoading: false,
                isAuthenticated: false,
                token: '',
                account: {

                }
            })
        }
    }
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
                                {dataUser && dataUser.isAuthenticated && <Nav.Item className='nav-link'>Welcome {dataUser.account.username}</Nav.Item>}
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                                    <NavDropdown.Divider></NavDropdown.Divider>
                                    <NavDropdown.Item href="#action/3.2">
                                        <span onClick={handleLogOut}>Log out</span>
                                    </NavDropdown.Item>
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