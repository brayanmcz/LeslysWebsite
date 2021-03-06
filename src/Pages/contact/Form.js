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
            {
              <form name="contact" method="post" className="text-center border border-light p-5" action="/thanks">       
                <p className="h4 mb-4">Contact us</p>
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" name="name"/>
                <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" name="email"/>
                <label>Subject</label>
                <select className="browser-default custom-select mb-4" name="subject">
                    <option value="" disabled>Choose option</option>
                    <option value="Question" defaultValue>Question</option>
                    <option value="Order">Order Inquiry</option>
                </select>
                <div className="form-group">
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" name="message"></textarea>
                </div>
                <button className="btn pink accent-1 btn-block" type="submit">Send<i className="fab fa-lg fa-telegram-plane send-icon"></i></button>        
                </form>
            }  
          </Wrapper>
        )
    }
}

export default ContactForm;