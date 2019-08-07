import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from "reactstrap";
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
                <img src={this.state.movie.Poster} className="img-fluid" alt={this.state.movie.Title} />
              </div>
              <div className="col-md-9">
                <Card>
                  <CardBody>
                    <CardTitle>{this.state.movie.Title}</CardTitle>
                    <CardSubtitle>Year: {this.state.movie.Year}</CardSubtitle>                       
                    <CardText>{this.state.movie.Plot}</CardText>
                     <h6>Reviews</h6>
                     {this.state.comments &&
                         this.state.comments.map(comment => (
                         <CardText key={comment._id}>
                        {comment.comment}
                        </CardText>
                      ))}
                  {!this.state.comments && this.state.comments.length > 0 && <h4>No comments</h4>}
                      <Link to={"/"}>
                    <Button outline color="danger" size="sm">Back</Button>
                    </Link>
                  </CardBody>
                </Card>
             
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
    var response = await fetch("http://www.omdbapi.com/?apikey=448f4427&i=" + imdbID);
    var movie = await response.json();
    
    var commentResp = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + imdbID,{
        headers: {Authorization: "Basic dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ=="}
      });
    var comments = await commentResp.json();

    this.setState({
      movieID: imdbID,
      movie: movie,
      comments: comments  
    });
  }
}
 
export default MovieDetails;