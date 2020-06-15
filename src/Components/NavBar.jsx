import React, { Component } from "react";
import image from "../Assets/Capture.PNG";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
} from "reactstrap";


class NavBar extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  searchInput = input => {
    if (input.currentTarget.value.length >= 3) {
      this.props.triggerSearch(input.currentTarget.value);
    } else {
      this.props.triggerSearch("");
    }
  };

  render() {
    return (
      // <div>
      //   <Navbar className="nav" expand="md">
      //     <NavbarBrand href="#" width="100px">
      //       <img src={image} style={{ width: 100 }} alt="sizzle-vu"/>
      //     </NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="mx-auto" navbar>
      //         <NavItem>
      //           <NavLink className="navlink" href="/">HOME</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink className="navlink" href="/accountprofile">ACCOUNT</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink className="navlink" href="/login">LOGIN</NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //     <div>
      //       <Input placeholder="Search" onChange={this.searchInput} id = "searchBar" />
      //     </div>
      //   </Navbar>
      // </div>
      <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
        <div className="navbar-translate">
            <a className="navbar-brand" href="/presentation.html">Movies</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="/" className="nav-link" >Home</a>
                </li>
                <li className="nav-item">
                    <a href="/accountprofile" className="nav-link">Account</a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link">Login</a>
                </li>
            </ul>

            <form className="form-inline ml-auto">
                <div className="form-group no-border">
                  <input type="text" className="form-control searchForm" placeholder="Search"  onChange={this.searchInput}/>
                </div>
                <div  className="btn btn-white btn-just-icon btn-round">
                    <i className="material-icons">search</i>
                </div>
            </form>
        </div>
    </div>
</nav>
    );
  }
}

export default NavBar;
