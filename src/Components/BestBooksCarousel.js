import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class ControlledCarousel extends Component {
    render() {

        return (
            <Carousel.Caption>
                <div className='d-flex justify-content-center align-items-start'><span className='fs-3'>{this.props.title}</span> <Badge bg="info" className='ms-3'>{this.props.status}</Badge></div>
                <p>{this.props.description}</p>
                {this.props.title !== 'No books found.' && <Button onClick={() => this.props.deleteBook(this.props.id)}>Delete</Button>}
            </Carousel.Caption>
        );
    }
}

export default ControlledCarousel;
