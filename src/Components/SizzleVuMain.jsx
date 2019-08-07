import React, { Component } from "react";
import NavBar from "./NavBar";
import MovieGallery from "./MovieGallery";
import { Container, Row} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { withRouter } from "react-router";
import MovieDetails from "./MovieDetails";

class SizzleVuMain extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collections: [
        { title: "Harry Potter", movies: [] },
        { title: "Lord of the rings", movies: [] },
        { title: "Hobbit", movies: [] }
    ],
       selectedMovie: null,
       searchValue: "",
    };
  }
 
   search = (value) => {
      this.setState({searchValue: value});
      console.log(value)
    }

  
  render() {
    
    return (
   <Router>
        <>
        <NavBar triggerSearch={this.search} />
        <Route path="/" exact render={() => 
         <Container fluid className="main">
          
          {this.state.collections.map((collectionsObject, index) => { 
            var filteredItems = collectionsObject.movies.filter(movie => movie.Title.toLowerCase().includes(this.state.searchValue))
            return (
            <div key={index}>
            {filteredItems.length > 0 &&
              <Row className = "titleRow">{collectionsObject.title}</Row>
            }
              <MovieGallery movies={filteredItems} onMovieClicked={(imdbID) => this.setState({ selectedMovie: imdbID })} />
            </div>
          )})
          }     
        </Container>
        }/>
         <Route path="/moviedetails/:imdbID" component={MovieDetails} />
         </>
         </Router>
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
