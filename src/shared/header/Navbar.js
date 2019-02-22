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
import styled from 'styled-components';

const Wrapper = styled.div`
`;

class NavbarPage extends Component {
  state = {
    isOpen: false,
    offset: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = (event) => {
    const winScroll = window.scrollY;
    console.log("Scroll: ", winScroll);
    
    this.setState({
      offset: winScroll
    });
  }

  toggleFalse = () => {
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
      <Wrapper>
      <MDBNavbar className={this.state.offset > 100 ? "fixed-top" : ""} color="cyan" dark expand="md">
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
      </Wrapper>
    );
  }
}

export default NavbarPage;
