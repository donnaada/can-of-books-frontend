import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from './BestBooksCarousel'
import CarouselImg from '../book-img.jpg'
import { Container, Form, Button, Modal } from 'react-bootstrap';



const SERVER = process.env.REACT_APP_SERVER


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }


  getBooks = async (req, res, next) => {
    try {

      let url = `${SERVER}/books`;
      let bookData = await axios.get(url);

      this.setState({
        books: bookData.data
      })

      res.status(200).send(bookData)

    } catch (error) {
      next(error)

      this.setState({
        books: []
      })
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    let bookObj = {
      title: e.target.bookTitle.value,
      description: e.target.bookDesc.value,
      status: e.target.bookStatus.value,
    }

    console.log(`bookObj`);
    this.postBook(bookObj);
  }

  postBook = async (bookObj) =>{
    try {
      let url = `${SERVER}/books`;

      let postBook = await axios.post(url, bookObj);

      this.setState({
        books: [...this.state.books, postBook.data]
      })
      // this.getBooks(); //Same concept as line 66-68
            
    } catch (error) {
      console.log(error.message)
    }
  }

  deleteBook = async (bookID) =>{
    try {
      let url = `${SERVER}/books/${bookID}`;
      console.log('url in delete>>>', url)
      
      await axios.delete(url);

      let updatedBooks = this.state.books.filter(book => book._id !== bookID);

      this.setState({
        books: updatedBooks 
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  handleModalShow = () =>{
    this.setState({
      showModal: true
    })
  }

  handleModalClose = () =>{
    this.setState({
      showModal: false
    })
  }

  render() {


    return (
      <Container className='my-5'>
        <Button onClick={()=>this.handleModalShow()}>Add New Book + </Button>

        <h2 className='text-center my-3'><span className="border-bottom pb-2 ">An Essential Lifelong Learning &amp; Formation Shelf</span></h2>

        <Modal
      // {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.state.showModal}
      onHide={()=>this.handleModalClose()}
    >
      <Form onSubmit={this.handleSubmit}>
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
        <Button variant="primary" type="submit" onClick={()=>this.handleModalClose()}>
          Submit
        </Button>
        <Button onClick={()=>this.handleModalClose()}>Close</Button>
      </Modal.Footer>
      </Form>
    </Modal>

        <main>
          {
            this.state.books.length > 0 &&
            <>
              <Carousel className='mt-5'>
                {this.state.books.map(book => {
                  return (
                    <Carousel.Item key={this.props.id}>
                      <img
                        className="d-block w-100"
                        src={CarouselImg}
                        alt="open book"
                      />
                      <ControlledCarousel
                        id={book._id}
                        title={book.title}
                        description={book.description}
                        status={book.status}
                        deleteBook={this.deleteBook}
                      />
                    </Carousel.Item>

                  )
                })}
              </Carousel>
            </>
          }


        </main >
      </Container>
    )
  }
}

export default BestBooks;
