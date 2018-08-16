import React, { Component } from 'react';
import Header from './../Header/Header';
import Carousel from './../Carousel/Carousel';


class Home extends Component {
  render() {
    return (

      <div className="App">
        <Header/>
        <Carousel/>
      </div>
    );
  }
}

export default Home;