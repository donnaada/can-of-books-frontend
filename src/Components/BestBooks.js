import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from './BestBooksCarousel'
import CarouselImg from '../book-img.jpg'
import { Container } from 'react-bootstrap';



const SERVER = process.env.REACT_APP_SERVER


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

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

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <Container className='my-5'>

        <h2 className='text-center my-3'><span className="border-bottom pb-2 ">An Essential Lifelong Learning &amp; Formation Shelf</span></h2>


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
