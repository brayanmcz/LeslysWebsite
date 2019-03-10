import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './Pages/Home.js';
import AboutPage from './Pages/About';
import styled from 'styled-components';
import ContactForm from './Pages/contact/ContactForm';

const Wrapper = styled.div`

  background-color: white;

  .status-bar{
    height: 30px;
    width: 100%;
    position: fixed;
    top: -30px;
    overflow: hidden;
    background-color: #4dd0e1  !important;
    /* background-color: #00bcd4  !important; */
    z-index: 1000 !important;
  }
  .component-container {
    margin-top: 76px !important;
  }
`;
class App extends Component {
  state = {
    offset: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = (event) => {
    const winScroll = window.pageYOffset;
    // console.log("App: ", winScroll);
    
    this.setState({
      offset: winScroll
    });
  }

  render() {
    return (
        <Router>
            <Wrapper>
            <div className="status-bar">
            </div>
              <Header offset={this.state.offset}/>
              <div className={this.state.offset >= 100 ? "component-container" : ""}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactForm}/>
              </div>              
            </Wrapper>
        </Router>
    );
  }
}

export default App;
