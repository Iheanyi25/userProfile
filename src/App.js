import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Profile from './Profile';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Profile />
          </div>
      </Router>
    );
  }
}

export default App;
