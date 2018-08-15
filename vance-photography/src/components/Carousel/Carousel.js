import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

class Carousel extends Component {
    render () {
        return (
          <div className="carousel">
            <Arrow
              direction="left"
              clickFunction={ this.previousSlide }
              glyph="&#9664;" />
    
            <ImageSlide url={ imgUrl } />
    
            <Arrow
              direction="right"
              clickFunction={ this.nextSlide }
              glyph="&#9654;" />
          </div>
        );
      }
    }

export default Carousel;