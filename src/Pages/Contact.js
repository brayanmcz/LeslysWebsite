import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import ContactForm from "./contact/ContactForm";
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
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <ContactForm />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default ContactPage;
