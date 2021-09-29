import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "./navbarcomp.css";

export default function NavbarComp() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#" className="navbarTitle">Toronto Gems</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '300px' }}
                navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Edit">New Post</Nav.Link>
                <Nav.Link href="/Posts/1234">View Post</Nav.Link>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
                </NavDropdown>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
