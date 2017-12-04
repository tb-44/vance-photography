import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (

      <div className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown">Dropdown </a>
            <ul>
              <li><Link to='/'>Action 1</Link></li>
              <li><Link to='about'>Action 2</Link></li>
            </ul>
      </div>
    );
  }
}

export default Header;