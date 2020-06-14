import React, { Component } from "react";
import { CardBody, CardSubtitle, CardText, CardTitle, Button, CardImg, Card, Row, Col } from "reactstrap";
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
    console.log("loading")
    return (<>
      {this.state.movie && (
        <>
        {/* <Container fluid> */}
          <Card id="card">
            <Row className="no-gutters">
              <Col md="4" >
                <CardImg left width="100%" src={this.state.movie.Poster} alt={this.state.movie.Title} id="cardImg" />
              </Col>
              <Col md="8" id="cardcol">
                <CardBody id="cardbody">
                  <CardTitle id="title"><h5>{this.state.movie.Title}</h5></CardTitle>
                  <CardSubtitle>{this.state.movie.Plot}</CardSubtitle>
                  <CardText>Year: {this.state.movie.Year}</CardText>
                  <CardText > <p id="reviewTitle">Reviews:</p></CardText>
                  <CardText id="commentText">
                    {this.state.comments &&
                      this.state.comments.map(comment => (
                        <div key={comment.id}>
                          {comment.comment}
                        </div>
                      ))}
                    {this.state.comments && this.state.comments.length <= 0 && (
                      <p>No reviews yet</p>)}
                  </CardText>

                  <Link to={"/"}>
                    <Button className="btnTwo" outline color="danger" size="sm">Back</Button>
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </Card>
          {/* </Container> */}
          {/* </div> */}
          {/* </div>
              </div> */}
        </>
      )};
   </>
    )
  }


  componentDidMount = async () => {
    console.log("componentdidload")
    await this.fetchDetails(this.props.match.params.imdbID);

  };




  fetchDetails = async imdbID => {

    var response = await fetch("http://localhost:8080/movies/details/" + imdbID);
    var movie = await response.json();

    var commentResp = await fetch("http://localhost:8080/movies/" + imdbID + "/reviews");
    var comments = await commentResp.json();

    this.setState({
      movieID: imdbID,
      movie: movie,
      comments: comments
    });
  }
}

export default MovieDetails;