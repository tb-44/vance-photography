import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <div className="container">
        <header>
          <nav>
            <h1 className="title" >Vance_<span>Photography</span></h1>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/gallery'>GALLERY</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;