import React, { Component } from 'react';
import Navbar from './header/Navbar';
import Logo from './header/Logo';
import styled from 'styled-components';
import { Animation } from 'mdbreact'

const Wrapper = styled.div`
    .header{
        height: 100px;
        width: 100%;
        background-color: #4dd0e1;
    }
`;

class Header extends Component {

    render () {
        return (
            <Wrapper>
                <div className="header">
                <Animation type={this.props.offset > 60 ? "fadeOutLeftBig" : "fadeInLeftBig"} duration="1s">
                    <Logo size='80px' top='100px' to="/"/>
                </Animation>

                </div>
                <Navbar offset={this.props.offset}/>
            </Wrapper>
        );
    }
}

export default Header;
