import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BestBooks from './Components/BestBooks';
import Profile from './Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route
              exact path="/about"
              element={<Profile />}
            >

            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
