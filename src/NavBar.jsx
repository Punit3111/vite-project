// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.module.css';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector(state => state.user);

  return (
    <Navbar bg="" expand="lg"  className="navbar"> 
      <Container className="container mgntop">
      <div>
        <p>Welcome{user}!</p>
      </div> 
        <Navbar.Brand as={NavLink} to="/">Embed-Square</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="navLink">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="navLink">
              Contact
            </Nav.Link>
 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;