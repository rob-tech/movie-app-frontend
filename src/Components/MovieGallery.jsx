import React, { Component } from "react";
import {Button,  ButtonGroup, Col} from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


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
      <Slider className="slide" slidesPerRow="6" {...settings}>
        {this.props.movies && this.props.movies.map(item => (

          <div key={item.imdbID} className="display">
            <img className="sliderImg"  width="70%" height="auto" src={item.Poster} alt={item.Title} />
              <h5 className = "desc">{item.Title}</h5>
               <Link to={"/moviedetails/" + item.imdbID}>
              <Button className="btnOne" outline color="none" size="sm" onClick={() => this.props.onMovieClicked(item.imdbID)}>View Details</Button>
              </Link>      
           </div>
        ))}
      </Slider>
      </>
    );
  }
}



export default MovieGallery;
