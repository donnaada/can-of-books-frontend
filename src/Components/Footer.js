import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='bottom'>
        <Container className="justify-content-center">
          <Navbar.Brand >
            <p> &copy; Tranquil Books, Inc.</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Footer;
