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

class ImageDetail extends Component {
  state = {
    modal14: this.props.modal14
  };

  componentWillReceiveProps() {
    this.setState({
      modal14: true
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.modal14}
          toggle={this.props.toggle(14)}
          centered
        >
          <MDBRow>
            <MDBCol md="12">
              <img
                src={this.props.image.fields.image[0].fields.file.url}
                alt={this.props.image.fields.title}
                className="img-fluid"
              />
            </MDBCol>
          </MDBRow>
          <MDBModalHeader toggle={this.props.toggle(14)}>
            {this.props.image.fields.title}
          </MDBModalHeader>
          <MDBModalBody>{this.props.image.fields.description}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="pink accent-1" onClick={this.props.toggle(14)}>
              View Recipe
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ImageDetail;
