import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


class BookFormModal extends Component {
  state = {  } 
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
      <Form onSubmit={this.props.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Description" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="bookStatus">
        <Form.Label>Status</Form.Label>
          <Form.Control type="name" Placeholder="Book Status" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={this.props.handleModalClose}>
          Submit
        </Button>
        <Button onClick={this.props.handleModalClose}>Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>
    );
  }
}
 
export default BookFormModal;