import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class MovieGallery extends Component {
  render() {
    return this.props.movies.map(item => (

   
  
        <Card className ="card"    key={item.imdbID}>
          <CardImg fluid top width="50%" height="auto" src={item.Poster} alt={item.Title}/>
          <CardBody>
            <CardTitle>{item.Title}</CardTitle>
            <CardSubtitle>{item.Year}</CardSubtitle>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>

    
    ));
  }
}

export default MovieGallery;
