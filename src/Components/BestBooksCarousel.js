import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UpdateBookForm from './UpdateBookForm';



class ControlledCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdateModal: false
        }
    }



    handleUpdateModalShow = () => {
        this.setState({
            showUpdateModal: true
        })
    }

    handleUpdateModalClose = () => {
        this.setState({
            showUpdateModal: false
        })
    }
    render() {


        return (
            <Carousel.Caption>
                <div className='d-flex justify-content-center align-items-start'><span className='fs-3'>{this.props.title}</span> <Badge bg="info" className='ms-3'>{this.props.status}</Badge></div>
                <p>{this.props.description}</p>
                {this.props.title !== 'No books found.' && <>
                    <Button className='mx-2' onClick={() => this.handleUpdateModalShow()}>Update</Button>
                    <Button className='mx-2' variant='danger' onClick={() => this.props.deleteBook(this.props.id)}>Delete</Button>
                    <UpdateBookForm
                        book={this.props.book}
                        vId={this.props.vId}
                        id={this.props.id}
                        title={this.props.title}
                        description={this.props.description}
                        status={this.props.status}
                        handleBookSubmit={this.handleBookSubmit}
                        showModal={this.state.showUpdateModal}
                        handleModalClose={this.handleUpdateModalClose}
                        updateBook={this.props.updateBook}
                    />
                </>}
            </Carousel.Caption>
        );
    }
}

export default ControlledCarousel;
