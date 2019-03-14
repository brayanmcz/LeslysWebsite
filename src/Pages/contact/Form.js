import React, { Component } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  .pink-text {
    color: pink;
  }

  .send-icon {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

class ContactForm extends Component {
    render() {
        return (
          <Wrapper>
          <form name="contact" method="post" className="text-center border border-light p-5">       
              <p className="h4 mb-4">Contact us</p>
          
          
              <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" name="name"/>
              <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" name="email"/>
          
              <label>Subject</label>
              
          
           
          
              <button className="btn btn-info btn-block" type="submit">Send<i class="fab fa-lg fa-telegram-plane send-icon"></i></button>        

          
              </form>
              {
              //   <form name="contact" method="post" action="/thanks">
              //   <input type="hidden" name="form-name" value="contact" />
              //   <p>
              //     <label>
              //       Your Name: <input type="text" name="name" />
              //     </label>
              //   </p>
              //   <p>
              //     <label>
              //       Your Email: <input type="email" name="email" />
              //     </label>
              //   </p>
              //   <p>
              //     <label>
              //       Message: <textarea name="message" />
              //     </label>
              //   </p>
              //   <p>
              //     <button type="submit">Send</button>
              //   </p>
              // </form>
              }

          </Wrapper>
        )
    }
}

export default ContactForm;