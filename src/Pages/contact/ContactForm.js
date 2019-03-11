import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import styled from "styled-components";

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
  };

  componentDidMount() {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return (
          navigator.userAgent.match(/IEMobile/i) ||
          navigator.userAgent.match(/WPDesktop/i)
        );
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
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
                  <form name="comments-queue" netlify-honeypot="full-name" action="/thanks" netlify>
                    <p class="honey">
                      <input name="path" value="{{ page.url }}" />
                      <label>Your full name: <input name="full-name"/></label>
                    </p>
                      <p>
                        <label for="name">Your name<small>What should I call you?</small></label>
                        <input type="text" name="name" id="name" />
                      </p>
                      <p>
                        <label for="email">Your email<small>I'll never spam you. I promise.</small></label>
                        <input type="email" name="email" id="email" />
                      </p>
                      <p>
                        <label for="comment">Your comment<small>Markdown is fine.</small></label>
                        <textarea name="comment" id="comment"></textarea>
                      </p>
                      <p>
                        <button type="submit" class="btn">Post your comment</button>
                      </p>
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
