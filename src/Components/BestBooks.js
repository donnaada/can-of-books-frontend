import axios from 'axios';
import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ControlledCarousel from './BestBooksCarousel'
import BookFormModal from './BookFormModal';
import CarouselImg from '../book-img.jpg'
import ShelfImg from '../bookshelf.jpg'
import { Container, Button } from 'react-bootstrap';
import NoBooks from './NoBooks';
import HasBooks from './HasBooks';



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

  handleSubmit = (e) => {
    e.preventDefault();

    let bookObj = {
      title: e.target.bookTitle.value,
      description: e.target.bookDesc.value,
      status: e.target.bookStatus.value,
    }

    console.log(`bookObj`);
    this.postBook(bookObj);
  }

  postBook = async (bookObj) => {
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

  deleteBook = async (bookID) => {
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

  updateBook = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`
      let updatedBook = await axios.put(url, bookToUpdate)
      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook
      });
      this.setState({
        books: updatedBookArray
      })


    } catch (error) {
      console.log(error.message)
    }
  }

  handleModalShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleModalClose = () => {
    this.setState({
      showModal: false
    })
  }



  render() {


    return (
      <Container className='my-5'>
        <Button onClick={() => this.handleModalShow()}>Add New Book + </Button>

        <h2 className='text-center my-3'><span className="border-bottom pb-2 ">An Essential Lifelong Learning &amp; Formation Shelf</span></h2>

        <BookFormModal
          showModal={this.state.showModal}
          handleModalClose={() => this.handleModalClose()}
          handleSubmit={this.handleSubmit}
        />

        <main>
          {this.state.books.length > 0
            ? <HasBooks
              bookState={this.state.books}
              id={this.props.id}
              img={CarouselImg}
              deleteBook={this.deleteBook}
              showModal={this.state.showModal}
              handleModalClose={this.handleModalClose}
              handleModalShow={this.handleModalShow}
              updateBook={this.updateBook}

            />
            : <NoBooks
              img={ShelfImg}
              key={999999}
              title={'No books found.'}
              description={'Use the Add New Book Button to start adding books to your shelf.'} />
          }
        </main >
      </Container>
    )
  }
}

export default BestBooks;
