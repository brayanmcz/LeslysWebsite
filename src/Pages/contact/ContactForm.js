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

    state = {
      mobile: null,
      ios: null
    }

    componentDidMount() {
      var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };

      this.setState({
        mobile: isMobile.any() ? true : false,
        ios: isMobile.iOS() ? true : false
      });
    }

    render() {
        return (
          <Wrapper>
           
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12">
                <MDBCard>
                <MDBCardBody>  
                  <form netlify method="POST" acceptCharset="UTF-8">
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
                      {
                      //<a href = "sms://+14158717215/&body=TextHere">IOS</a>
                      //<a href = "sms://+14158717215/?body=TextHere">Android</a>
                      }
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