import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Link to="/about"><Navbar.Brand>Nick Vaccaro</Navbar.Brand></Link>
            <Nav>
                <Link to="/about" className="nav-link">About</Link>
                {/* <Link to="/projects" className="nav-link">Projects</Link> */}
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/now" className="nav-link">Now</Link>
            </Nav>
        </Navbar>
    )
}
