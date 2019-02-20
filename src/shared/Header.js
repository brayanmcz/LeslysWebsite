import React, { Component } from 'react';
import Navbar from './header/Navbar';
import Logo from './header/Logo';
import styled from 'styled-components';

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
                    <Logo/>
                </div>
                <Navbar/>
            </Wrapper>
        );
    }
}

export default Header;
