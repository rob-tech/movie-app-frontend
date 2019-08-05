import React, { Component } from "react";
import {Button} from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class MovieGallery extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    
    };
   
    return (
      <>
      <Slider slidesPerRow="6" {...settings}>
        {this.props.movies && this.props.movies.map(item => (
          <div key={item.imdbID}>
            <img width="50%" height="auto" src={item.Poster} alt={item.Title} />
              <h5>{item.Title}</h5>
              <Button onClick={() => this.props.onMovieClicked(item.imdbID)}>Comments</Button>
           </div>
        ))}
      </Slider>
      </>
    );
  }
}



export default MovieGallery;
