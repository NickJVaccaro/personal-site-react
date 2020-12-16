import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Navbar.Brand as={Link} to="/about">Nick Vaccaro</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} to="/about" href="/about" className="nav-link">About</Nav.Link>
                    <Nav.Link as={Link} to="/blog" href="/blog" className="nav-link">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/now" href="/now" className="nav-link">Now</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
