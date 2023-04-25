import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='bottom'>

        <Container>
          <Navbar.Brand className="text-center">Code Fellows</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Footer;
