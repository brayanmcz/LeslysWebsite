import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './Pages/Home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header/>
          <Route exact path="/" component={HomePage} />
        </>
      </Router>
    );
  }
}

export default App;
