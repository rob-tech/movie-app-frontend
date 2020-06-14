import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class MovieGallery extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };

    return (
      <>
        <Slider className="slide" {...settings}>
          {this.props.movies &&
            this.props.movies.map((item) => (
              <div key={item.imdbID} className="display">
                <Link to={"/moviedetails/" + item.imdbID}>
                  <img
                    className="img-fluid"
                    id="sliderImg"
                    src={item.Poster}
                    alt={item.Title}
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </>
    );
  }
}

export default MovieGallery;
