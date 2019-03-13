import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

class ContactForm extends Component {
    render() {
        return (
            <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <form name="contact" netlify="true" action="/thanks">
                  <p className="h4 text-center mb-4">Get in Touch!</p>
                  <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                  />
                  <br />
                  <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
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
                    Your message
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
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
        )
    }
}

export default ContactForm;