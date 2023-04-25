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

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <main>
          {
            this.state.books.length > 0 &&
            <>
              <Carousel>
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


// import React, { Component, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselImg from './book-img.jpg'


// class ControlledCarousel extends Component {

//   constructor(props) {
//     super(props);
//     this.state({
//       index: 0,
//     })
//   }

//   // const [index, setIndex] = useState(0);
//   handleSelect = (selectedIndex, e) => {

//     this.setState({
//       index: selectedIndex
//     })

//   };
//   render() {

//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={CarouselImg}
//             alt="Image of open book"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

// export default ControlledCarousel;
