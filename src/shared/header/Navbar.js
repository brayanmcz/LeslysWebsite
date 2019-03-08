import React, { Component } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from 'react-router-dom';
import * as Router from 'react-router';

class NavbarPage extends Component {
  state = {
    isOpen: false,
    offset: this.props.offset
  };

  toggleFalse = () => {
    console.log("Router: ", Router);
    if (this.state.isOpen === true)
      this.setState({
        isOpen: false
      });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      // <Wrapper>
      //  TODO: Fix the 'jump'
      //        When state.offset > 100 and true condition is fixed-top 
      <MDBNavbar className={this.props.offset >= 100 ? "fixed-top" : ""} color="cyan" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <Link to="/"><strong className="white-text">Lesly's Pastries</strong></Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/" onClick={this.toggleFalse}>
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about" onClick={this.toggleFalse}>
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact" onClick={this.toggleFalse}>
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      // </Wrapper>
    );
  }
}

export default NavbarPage;
