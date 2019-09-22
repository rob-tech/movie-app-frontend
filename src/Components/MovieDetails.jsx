import React, { Component } from "react";
import { CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
     constructor(params) {
    super(params);

    this.state = {
      movieID: null,
      movie: null,
      comments: []
    };
  }
   
    render() { 
        return (  <>
        {this.state.movie && (
          <>
              <div className="row">
              <div className="col-md-3">
                <img id = "cardImg" src={this.state.movie.Poster} alt={this.state.movie.Title} />
              </div>
              <div className="col-md-5" id="cardcol">
                <div className="Card" id="card">
                  <CardBody>
                    <CardTitle>{this.state.movie.Title}</CardTitle>
                    <CardSubtitle>Year: {this.state.movie.Year}</CardSubtitle>                       
                    <CardText>{this.state.movie.Plot}</CardText>
                     <h6>Reviews</h6>
                     <CardText>
                     {this.state.comments &&
                         this.state.comments.map(comment => (
                         <div key={comment.id}>
                        {comment.comment}
                        </div>
                      ))}
                      </CardText>
                  {!this.state.comments && this.state.comments.length > 0 && <h4>No comments</h4>}
                      <Link to={"/"}>
                    <Button className="btnTwo" outline color="danger" size="sm">Back</Button>
                    </Link>
                  </CardBody>
                </div>
                </div>
              </div>
           
           </>
          )};
       </>
      )
    }


componentDidMount = async () => {
    await this.fetchDetails(this.props.imdbID);
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.imdbID !== this.props.imdbID) {
      await this.fetchDetails(this.props.imdbID);
    }
  };

    
 fetchDetails = async imdbID => {
   imdbID = this.props.match.params.imdbID;
    var response = await fetch("http://localhost:3000/movies/details" + imdbID);
    var movie = await response.json();
    
    var commentResp = await fetch("http://localhost:3000/movies/" + imdbID + "/reviews");
    var comments = await commentResp.json();

    this.setState({
      movieID: imdbID,
      movie: movie,
      comments: comments  
    });
  }
}
 
export default MovieDetails;