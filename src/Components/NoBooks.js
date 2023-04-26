import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from './BestBooksCarousel'


class NoBooks extends Component {
    state = {}
    render() {
        return (
            <Carousel className='mt-5' indicators={false}>
                return (
                <Carousel.Item key={this.props.id}>
                    <img
                        className="d-block w-100"
                        src={this.props.img}
                        alt="open book"
                    />
                    <ControlledCarousel
                        id={this.props.key}
                        title={this.props.title}
                        description={this.props.description}
                    />
                </Carousel.Item>

                )

            </Carousel>
        );
    }
}

export default NoBooks;