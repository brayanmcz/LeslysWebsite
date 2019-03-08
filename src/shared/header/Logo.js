import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImage from './cupcake.png';

const Wrapper = styled.div`  
    position: relative;

    img {
        /* height: ${props => props.size}; */
        /* width: ${props => props.lineHeight}; */
        height: 80px;
        width: 80px;
        position: absolute;  
        top: 100px;  
        bottom: 0;  
        left: 0;  
        right: 0;  
        margin: auto; 

        /* background-color: white; */
        background-color: ${props => props.white};
        border: 2px solid #00bcd4 ;
    }
`;

class Logo extends Component {

    componentWillUpdate() {
        console.log("props:", this.props);
    }

    render() {
        return (
            <Wrapper>
                <img src={LogoImage} className="rounded-circle mx-auto d-block" alt="aligment" />
            </Wrapper>
        );
    }
}

export default Logo;
