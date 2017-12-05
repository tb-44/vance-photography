import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <div className="dropdown">
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/gallery'>GALLERY</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
            </ul>
      </div>
    );
  }
}

export default Header;