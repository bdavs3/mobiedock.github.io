import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/CustomNavbar';
import About from './components/About';
import Solution from './components/Solution';
import Team from './components/Team';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckAlt, faSolarPanel, faSitemap, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faSolarPanel)
library.add(faSitemap)
library.add(faMoneyCheckAlt)
library.add(faMapMarkedAlt)

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <About path="/" component={About} />
          <Solution path="/" component={Solution} />
          <Team path="/" component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;
