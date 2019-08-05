import React, { Component } from "react";
import NavBar from "./NavBar";
import MovieGallery from "./MovieGallery";
import { Container, CardColumns, Row } from "reactstrap";

class SizzleVuMain extends Component {
  
  constructor(props) {
 
    super(props);
    this.state = {
      collections: [{ title: "Harry Potter", movies: [] }]
    };
  }
 
  //  search = (value) => {
  //     this.setState({searchValue: value});
  //     console.log(value)
  //   }

  state = {};
  render() {
    return (
      <>
        <NavBar triggerSearch={this.search} />
        <Container fluid className="main">
          {this.state.collections.map((collectionsObject, index) => (
            <div key={index}>
              <h1>empty</h1>
              <MovieGallery movies={collectionsObject.movies} />
            </div>
          ))}

        </Container>
        
      </>
      
    );
  }
  componentDidMount = async () => {
    await this.getMoviesHP();
    // await this.getMoviesLOR();
    // await this.getMoviesHobbit();
  };

  getMoviesHP = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=harry%20potter&type=movie"
    );
    var moviesArray = await response.json();
    var collection = this.state.collections;
    collection[0].movies.push(moviesArray);

    this.setState({
      collections: collection
    });

    console.log(collection[0].movies);
  };
}

export default SizzleVuMain;
