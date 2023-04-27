import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';

class UpdateBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            status: this.props.status,
            id: this.props.id,
            vId: this.props.vId
        }
    }
    handleBookSubmit = (event) => {
        event.preventDefault();
        console.log('>>> book', this.props.book)
        console.log('>>> e.target', event.target)

        let bookToUpdate = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status,
            _id: this.state.id,
            __v: this.state.vId
        }
        console.log('>>>', bookToUpdate)

        this.props.updateBook(bookToUpdate)
        this.props.handleModalClose();
    }

    setTitle = (event) => (
        this.setState({
            title: event.target.value,
        })
    )
    setDescription = (event) => (
        this.setState({
            description: event.target.value,
        })
    )
    setStatus = (event) => (
        this.setState({
            status: event.target.value,
        })
    )

    render() {
        return (
            <Modal
                // {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.props.showModal}
                onHide={this.props.handleModalClose}
            >
                <Form onSubmit={this.handleBookSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="bookTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={this.setTitle} defaultValue={this.props.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bookDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" onChange={this.setDescription} defaultValue={this.props.description} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bookStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" onChange={this.setStatus} defaultValue={this.props.status} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button onClick={this.props.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
};
export default UpdateBookForm;