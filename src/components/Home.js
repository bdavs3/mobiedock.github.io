import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

const img = require('../shed-lmu2.png');
const fullPageStyle = {
  height: '100vh',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Home extends Component {
  render() {
    return (
      <div id="home">

        <div className="full-page-image" style={fullPageStyle}>
          <div className="overlay"></div>
          <div className="center-page-caption text-center">
            <div className ="full-width">
              <h1 className="main-heading text-white">MobieDock</h1>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
