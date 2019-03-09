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
  Animation
} from "mdbreact";
import { Link } from 'react-router-dom';
import * as Router from 'react-router';
import Logo from './Logo';

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
      <MDBNavbar className={this.props.offset >= 100 ? "fixed-top" : ""} color="cyan" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
        <Animation type={this.props.offset > 60 ? "fadeInLeftBig" : "fadeOutLeftBig"} duration="0.5s">
            <Logo size='40px' top='0' to="/"/>
        </Animation>
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
