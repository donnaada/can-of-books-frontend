import React from 'react';
import { Navbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HouseFill } from 'react-bootstrap-icons';

class Header extends React.Component {
  render() {
    return (
      <Navbar expand="md" bg="dark" variant="dark" text="white">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link fs-3">Tranquil Books</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav activeKey="/" className='d-flex flex-row align-items-end'>
              <NavItem>
                <Link to="/" className="nav-link "><HouseFill className='fs-3' /></Link>
              </NavItem>
              <NavItem>
                <Link to="/about" eventKey="about-link" className="nav-link ">About Us</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}

export default Header;
