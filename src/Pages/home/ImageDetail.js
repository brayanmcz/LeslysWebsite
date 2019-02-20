import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol
} from "mdbreact";
// import styled from "styled-components";

// const Wrapper = styled.div`
  
// `;

class ImageDetail extends Component {
  state = {
    modal14: this.props.isOpen
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  componentWillReceiveProps() {
    console.log("IMAGE: ", this.props.image.fields.photo.fields.file.url);
    this.setState({
      modal14: this.props.isOpen
    });    
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
        <MDBRow>
        <MDBCol md="12">
            <img
              src={this.props.image.fields.photo.fields.file.url}
              alt={this.props.image.fields.title}
              className="img-fluid"
            />
        </MDBCol>
      </MDBRow>
          <MDBModalHeader toggle={this.toggle(14)}>
            {this.props.image.fields.title}
          </MDBModalHeader>
          <MDBModalBody>
            {}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="pink accent-1" onClick={this.toggle(14)}>
              View Recipe
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ImageDetail;
