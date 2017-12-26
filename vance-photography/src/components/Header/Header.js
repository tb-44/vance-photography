import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      dropMenu: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      dropMenu: menuState
    });
  }

  render() {

    let menu;
    if(this.state.dropMenu) {
      menu = <div>
                <ul>
                  <li>First Item </li>
                  <li>Second Item </li>
                  <li>Third Item </li>
                </ul>
              </div>
    } else {
      menu = "";
    }

    return (
      <div className="container">
        <header>
          <nav>
            <h1 className="title" >Vance <span className="title2">Photography</span></h1>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
          <div id = "menu">
        <i className = "fa fa-plus" onClick= { this.toggleMenu }/>
      <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {menu}
      </CSSTransitionGroup>
    </div>
        </header>
      </div>
    );
  }
}

export default Header;