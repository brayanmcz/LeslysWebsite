import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ImageDetail extends Component {
state = {
  modal14: this.props.isOpen
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

componentWillReceiveProps(){
    this.setState({
        modal14: this.props.isOpen
    })
}

render() {
  return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ImageDetail;