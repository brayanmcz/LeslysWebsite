import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import ContactForm from './contact/ContactForm';

class ContactPage extends Component{
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <ContactForm/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}