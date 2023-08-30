import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import './TopNav.css';

export default function TopNav() {
    const location = useLocation();

    // Get the nav item that we should start with, on first page load.
    // This is necessary because some pages, like the blog page, have additional data passed in
    // that doesn't match up with the navItems list below.
    const getStartingNavItem = () => {
        // get rid of the starter /
        let startNavItem = location.pathname.slice(1);

        // If there's a second /, remove it and everything after it
        let indexOfSlash = startNavItem.indexOf('/');
        if(indexOfSlash > 0) {
            startNavItem = startNavItem.substring(0, indexOfSlash);
        }
        return startNavItem;
    }

    const [activeNav, setActiveNav] = useState(getStartingNavItem());

    const navItems = ['about', 'projects', 'blog', 'now'];
    const navLink = (item) => {
        return (
            <Nav.Link 
                as={Link} 
                key={item}
                eventKey={item}
                to={`/${item}`} 
                href={`/${item}`} 
                onSelect={() => selectNav(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
            </Nav.Link>
        )
    }

    const selectNav = (item) => {
        setActiveNav(item);
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Navbar.Brand as={Link} to="/about" href="/about" onClick={() => selectNav('about')}>Nick Vaccaro</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={activeNav}>
                    {navItems.map(item => navLink(item))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
