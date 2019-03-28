import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/CustomNavbar';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <About path="/" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
