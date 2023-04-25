import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Badge } from 'react-bootstrap';


class ControlledCarousel extends Component {
    render() {

        return (
            <Carousel.Caption>
                <div className='d-flex justify-content-center align-items-start'><span className='fs-3'>{this.props.title}</span> <Badge bg="info" className='ms-3'>{this.props.status}</Badge></div>
                <p>{this.props.description}</p>
            </Carousel.Caption>
        );
    }
}

export default ControlledCarousel;
