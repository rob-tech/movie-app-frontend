import React, { Component } from "react";
import NavBar from "./NavBar";
import MovieGallery from "./MovieGallery";
import {Container, CardColumns, Row } from "reactstrap";

class SizzleVuMain extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        harryPotter: [], 
        lor: [], 
        hobbit: [], 
        searchValue: ""

    }
 }

 search = (value) => { 
    this.setState({searchValue: value});
    console.log(value)
  }

  state = {};
  render() {
    return (
      <>
        <NavBar triggerSearch={this.search} />
        <Container fluid className="main">
          <h1>Harry Potter</h1>
  
            <MovieGallery movies={this.state.harryPotter.filter(movie => movie.Title.includes(this.state.searchValue))} />
         
          <h1>Lord of the Rings</h1>
        
            <MovieGallery movies={this.state.lor.filter(movie => movie.Title.includes(this.state.searchValue))} />
      
          <h1>Hobbit</h1>
        
            <MovieGallery movies={this.state.hobbit.filter(movie => movie.Title.includes(this.state.searchValue))} />
      
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
    this.setState({
      harryPotter: moviesArray.Search
    });
  };

  getMoviesLOR = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=lord%20of%20the%20rings&type=movie"
    );
    var moviesArray = await response.json();
    this.setState({
      lor: moviesArray.Search
    });
  };

  getMoviesHobbit = async () => {
    var response = await fetch(
      "http://www.omdbapi.com/?apikey=448f4427&s=Hobbit&type=movie"
    );
    var moviesArray = await response.json();
    this.setState({
      hobbit: moviesArray.Search
    });
  };
}

export default SizzleVuMain;
