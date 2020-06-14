import React, { Component } from "react";
import MovieGallery from "./MovieGallery";
import { Row } from "reactstrap";
import { BrowserRouter as Router } from "react-router-dom";
// import { withRouter } from "react-router";


class SizzleVuMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [
        { Title: "Harry Potter", movies: [] },
        { Title: "The Lord of the Rings", movies: [] },
        { Title: "Hobbit", movies: [] }
      ],
      selectedMovie: null
    };
  }

  //movies={filteredItems} filteredMovie={this.state.genericMovie} filteredTitle={this.state.genericTitle} onMovieClicked={(imdbID) => this.setState({ selectedMovie: imdbID })}

  render() {
    return (

        <>
          {this.state.collections.map((collectionsObject, index) => {
            // var filteredItems = collectionsObject.movies.filter(movie => movie.Title.toLowerCase().includes(this.state.genericMovie))
            return (
              <div key={index}>
                  <Row className="titleRow">{collectionsObject.Title}</Row>
                   <MovieGallery movies={collectionsObject.movies} onMovieClicked={imdbID => this.setState({ selectedMovie: imdbID })
                    }
                  />              
              </div>
            );
          })}
        </>

    );
  }

  componentDidMount = async () => {
    await this.getMoviesHP();
    await this.getMoviesLOR();
    await this.getMoviesHobbit();
  };

  getMoviesHP = async () => {
    var response = await fetch("http://localhost:8080/movies/harrypotter");
    var hpmovies = await response.json();
    var allMovies = this.state.collections;
    allMovies[0].movies = hpmovies;
    this.setState({
      collections: allMovies
    });
  };

  getMoviesLOR = async () => {
    var response = await fetch("http://localhost:8080/movies/lor");
    var movies = await response.json();
    var allMovies = this.state.collections;
    allMovies[1].movies = movies;
    this.setState({
      collections: allMovies
    });
  };

  getMoviesHobbit = async () => {
    var response = await fetch("http://localhost:8080/movies/hobbit");

    var movies = await response.json();
    var allMovies = this.state.collections;
    allMovies[2].movies = movies;
    this.setState({
      collections: allMovies
    });
  };


}

export default SizzleVuMain;
