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
import styled from 'styled-components';

const Wrapper = styled.div`
  .img-square {
    height: auto !important;
    width: 100% !important;
  }
`;

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
      <Wrapper>
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
                className="img-fluid img-square"
              />
            </MDBCol>
          </MDBRow>
          <MDBModalHeader toggle={this.props.toggle(14)}>
            {this.props.image.fields.title}
          </MDBModalHeader>
          <MDBModalBody>{this.props.image.fields.description}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className="pink accent-1" onClick={this.props.toggle(14)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      </Wrapper>

    );
  }
}

export default ImageDetail;
