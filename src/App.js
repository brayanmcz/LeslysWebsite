import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './Pages/Home.js';
import AboutPage from './Pages/About';


class App extends Component {
  render() {
    return (
        <Router>
            <>
              <Header/>
              <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
              </div>              
            </>
        </Router>
    );
  }
}

export default App;
