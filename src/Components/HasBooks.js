

import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import ControlledCarousel from './BestBooksCarousel'



class HasBooks extends Component {
    render() {
        return (
            <>
                <Carousel className='mt-5'>
                    {this.props.bookState.map(book => {
                        return (
                            <Carousel.Item key={this.props.id}>
                                <img
                                    className="d-block w-100"
                                    src={this.props.img}
                                    alt="open book"
                                />
                                <ControlledCarousel
                                    id={book._id}
                                    title={book.title}
                                    description={book.description}
                                    status={book.status}
                                    deleteBook={this.props.deleteBook}
                                />
                            </Carousel.Item>

                        )
                    })}
                </Carousel>
            </>
        );
    }
}

export default HasBooks;