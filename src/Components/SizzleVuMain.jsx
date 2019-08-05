import React, { Component } from "react";
import NavBar from "./NavBar";
import MovieGallery from "./MovieGallery";
import { Container, } from "reactstrap";
import Comments from "./Comments"

class SizzleVuMain extends Component {
  
  constructor(props) {
 
    super(props);
    this.state = {
      collections: [
        
        { title: "Harry Potter", movies: [] },
        { title: "Lord of the rings", movies: [] },
        { title: "Hobbit", movies: [] }
    
    ],

       selectedMovie: null
    
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
              <h1>{collectionsObject.title}</h1>
              <MovieGallery movies={collectionsObject.movies} onMovieClicked={(imdbID) => this.setState({ selectedMovie: imdbID })} />
            </div>
          ))}
             
        <Comments imdbID={this.state.selectedMovie}/>
        </Container>
        
      </>
      
    );
  }
  componentDidMount = async () => {
    await this.getMoviesHP();
    await this.getMoviesLOR();
    await this.getMoviesHobbit();
  };

  getMoviesHP = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=harry%20potter&type=movie"
    );
    var moviesArray = await response.json();
    var collection = this.state.collections;
    collection[0].movies = moviesArray.Search;

    this.setState({
      collections: collection
    });

    console.log(collection[0].movies);
  };

  getMoviesLOR = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=lord%20of%20the%20rings&type=movie"
    );
    var moviesArray = await response.json();
    var collection = this.state.collections;
    collection[1].movies = moviesArray.Search;

    this.setState({
      collections: collection
    });

    console.log(collection[1].movies);
  };

  getMoviesHobbit = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=Hobbit&type=movie"
    );
    var moviesArray = await response.json();
    var collection = this.state.collections;
    collection[2].movies = moviesArray.Search;

    this.setState({
      collections: collection
    });

    console.log(collection[2].movies);
  };
}

export default SizzleVuMain;
