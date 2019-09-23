import React, { Component } from "react";
import NavBar from "./NavBar";
import FilteredItems from "./FilteredItems";
import SizzleVuMain from "./SizzleVuMain";
import { Container} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { withRouter } from "react-router";
import MovieDetails from "./MovieDetails";
import AccountProfile from "./AccountProfile";
import { Link } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genericMovie: null,
      genericTitle: null
    };
  }
  search = value => {
    this.filterMovie(value);
  };

  render() {
    return (
      <Router>
        <>
          <NavBar triggerSearch={this.search} />
          <Container fluid className="main">
          {!this.state.genericMovie && !this.state.genericTitle && (
            <Route path="/" exact component={SizzleVuMain} />
          )}
           {this.state.genericMovie && this.state.genericTitle && (
            <FilteredItems
              filteredMovie={this.state.genericMovie}
              filteredTitle={this.state.genericTitle}
            />
            )}
             <Route path="/moviedetails/:imdbID" exact component={MovieDetails} />
           </Container>
          <Route path="/accountprofile" exact component={AccountProfile} />
         
        </>
      </Router>
    );
  }

  filterMovie = async filteredMovie => {
    if (filteredMovie != null && filteredMovie.length > 0){
    var response = await fetch("http://localhost:3000/movies/" + filteredMovie);
    var selectedMovies = await response.json();
    if (selectedMovies != null) {
      var genericMovieTitle = "";
      selectedMovies.forEach((oneMovieObject, index) => {
        if (index === 0) {
          genericMovieTitle = oneMovieObject.Title.toUpperCase();
        }
      });
    }
    this.setState({
      genericTitle: genericMovieTitle,
      genericMovie: selectedMovies
    });
  }else {
    this.setState({
      genericTitle: null,
      genericMovie: null
    })
  }
      
  };
}

export default Main;
