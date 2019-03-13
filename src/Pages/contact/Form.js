import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
  .pink-text {
    color: pink;
  }
`;

class ContactForm extends Component {
    render() {
        return (
          <Wrapper>
           <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
              {
                //<form name="contact" netlify="true" action="/thanks">
              }
                <form name="contact" netlify="true">
                  <p className="h4 text-center mb-4">Get in Touch!</p>
                  <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Name <span className="pink-text">*</span>
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    required
                  />
                  <br />
                  <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Email <span className="pink-text">*</span>
                  </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                    required
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactSubjectEx"
                    className="grey-text"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    className="grey-text"
                  >
                    Message <span className="pink-text">*</span>
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="5"
                    required
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="pink" type="submit">
                      Send
                      <MDBIcon icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </Wrapper>
        )
    }
}

export default ContactForm;