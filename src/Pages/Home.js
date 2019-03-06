import React, { Component } from "react";
import styled from 'styled-components';
import ImageContainer from "./home/ImageContainer";

const Wrapper = styled.div`
  height: 80vh;
  padding-bottom: 350px;
`;

class HomePage extends Component {
  render() {
    return(
      <Wrapper>
        <ImageContainer/>
      </Wrapper>
    );
  }
}

export default HomePage;
