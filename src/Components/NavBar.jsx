import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  searchInput = (input) => {
    if (input.currentTarget.value.length >= 3) {
      this.props.triggerSearch(input.currentTarget.value);
    } else {
      this.props.triggerSearch("");
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-5">
          <div className="navbar-translate">
            <a className="navbar-brand" href="/presentation.html">
              Movies
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <form className="form-inline px-5">
              <div className="form-group no-border" id="searchFormGroup">
                <input
                  type="text"
                  className="form-control searchForm"
                  placeholder="Search"
                  onChange={this.searchInput}
                />
              </div>
                <i className="material-icons">search</i>
            </form>
            <ul className="navbar-nav ml-auto px-0">
              <li className="nav-item my-auto mx-3">
                <i className="fa fa-home navIcon" aria-hidden="true"></i>
              </li>
              <li className="nav-item my-auto">
                <i className="fa fa-power-off navIcon" aria-hidden="true"></i>
              </li>
              {/* <li className="nav-item">
                <a href="/accountprofile" className="nav-link">
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
