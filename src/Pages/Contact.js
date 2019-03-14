import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ContactForm from "./contact/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

class ContactPage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
                  <ContactForm />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default ContactPage;
