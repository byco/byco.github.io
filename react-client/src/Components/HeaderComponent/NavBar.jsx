import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../dist/coreui.min.css';

class NavBar extends Component {
  render() {
    return (
      <header>
             <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
      </header>
    )
  }
}
export default NavBar;
