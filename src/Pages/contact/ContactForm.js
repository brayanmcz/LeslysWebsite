import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: calc(100vh - 138px - 36px);
  margin-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

class ContactForm extends Component {
    render() {
        return (
          <Wrapper>
           
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                <MDBCard>
                <MDBCardBody>  
                  <form action="https://formcarry.com/s/FzMfZR9DNcX" method="POST" accept-charset="UTF-8">
                    <p className="h5 text-center mb-4">Get In Touch !</p>
                    <div className="grey-text">
                      <MDBInput
                        name="name"
                        label="Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        name="email"
                        label="Email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        name="message"
                        type="textarea"
                        label="Message"
                        icon="pencil-alt"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="pink" name="submit" type="submit">
                        Send <MDBIcon icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                  </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </Wrapper>
          );
    }
}

export default ContactForm;