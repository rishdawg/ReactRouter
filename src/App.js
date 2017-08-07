import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import {User} from './components/User.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
          <div>
            <Route exact path ="/" component={Navigation}/>
            <Route path ="/user" component={User}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
