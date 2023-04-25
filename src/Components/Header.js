import React from 'react';
import { Navbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" text="white">
        <Container>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          {/* PLACEHOLDER: render a navigation link to the about page */}

          <Nav className="justify-content-end" activeKey="/home">
            <NavItem>
              <Link to="/" className="nav-link ">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link ">About Us</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
