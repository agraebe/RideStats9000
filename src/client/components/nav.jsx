import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const generateLoginText = (loggedIn, demo) => {
  if (loggedIn) {
    if (demo) {
      return 'End Demo';
    }
    return 'Log out';
  }
  return 'Log in';
};

const NavTop = ({ handleDemoClick, handleLoginClick, loggedIn, demo }) => {
  const loginText = generateLoginText(loggedIn, demo);
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a>RideStats</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {demo || loggedIn ? null : <NavItem eventKey={1} onClick={handleDemoClick}>Demo</NavItem>}
          <NavItem eventKey={2} onClick={handleLoginClick}>{loginText}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTop;
