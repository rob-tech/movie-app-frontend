import React, { Component } from "react";


class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: null, comments: [] };
  }

  render() {
    return (
      <>
         {this.state.comments &&
          this.state.comments.map(comment => (
            <div key={comment._id}>
              {comment.author}: {comment.comment}
            </div>
          ))}
        {!this.state.comments && this.state.comments.length > 0 && <h4>No comments</h4>}
      </>
    );
  }

  componentDidMount = async () => {
    await this.getAllComments(this.props.imdbID);
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.imdbID !== this.props.imdbID) {
      await this.getAllComments(this.props.imdbID);
    }
  };

  getAllComments = async id => {
    var response = await fetch("http://www.omdbapi.com/?apikey=448f4427&i=" + id);
    var movie = await response.json();

    var commentResp = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + id,
    {
        headers: {Authorization: "Basic dXNlcjc6M1VVNWRZRnZlblJ1UlA3RQ=="}
      }
    );
    var comments = await commentResp.json();
    this.setState({ movie: movie, comments: comments });
  };

}


export default Comments;
