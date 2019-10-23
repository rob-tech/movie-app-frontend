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
      <div>
        <Navbar className="nav" style={{height: 60}} expand="md">
          <NavbarBrand href="#" width="100px">
            <img src={image} style={{ width: 100 }} alt="sizzle-vu"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink className="navlink" href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/accountprofile">ACCOUNT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/login">LOGIN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto">
            <Input placeholder="search" onChange={this.searchInput} id = "searchBar" />
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
