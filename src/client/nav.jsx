import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavTop = ({ handleDemoClick, handleLoginClick, loggedIn }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a>RideStats9000</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={handleDemoClick}>Demo</NavItem>
          <NavItem eventKey={2} onClick={handleLoginClick}>{loggedIn ? 'Log out' : 'Log in' }</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTop;