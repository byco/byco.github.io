// store routes for React routes to navigate the website

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './homePage.js';
import NavBar from './HeaderComponent/NavBar.jsx';
import Footer from './FooterComponent/Footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          This is a test
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
