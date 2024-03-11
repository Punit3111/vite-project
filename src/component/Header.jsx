// eslint-disable-next-line no-unused-vars
import React from 'react'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#home">NavBar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">About Test</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    
  )
};

export default Header
