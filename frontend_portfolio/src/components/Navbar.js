import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavbarDisplay = () =>{
  return (
    <Navbar bg="light" expand ="lg" className="navbar navbar-light bg-light navbar-expand-lg static-top">
  <Navbar.Brand href="#home">Jacky's Personal Website</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href = "/">Home</Nav.Link>
      <Nav.Link href = '/projects'>Projects</Nav.Link>
      <Nav.Link href ="/experiences">Experiences</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}