import React, { Component } from "react";
import { Row } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";

class FilteredItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedMovie: null
        };
      }

    render() {
      var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,        
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          };
        return (

            <>
                {this.props.filteredTitle && (
                    <>
                        <Row className="titleRow"> {this.props.filteredTitle} </Row>

                        <Slider className="slide"  {...settings}>
                            {this.props.filteredMovie && this.props.filteredMovie.map(item => (
                                <div key={item.imdbID} className="display">
                                    <img className="img-fluid" id="sliderImg" width="70%" height="auto" src={item.Poster} alt={item.Title} />
                                    <h5 className="desc">{item.Title}</h5>
                                    <Link to={"/moviedetails/" + item.imdbID}>
                                        <Button className="btnOne" outline color="danger" size="sm" >View Details</Button>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </>
                )};
           </>
         )
    }
}

    export default FilteredItems;