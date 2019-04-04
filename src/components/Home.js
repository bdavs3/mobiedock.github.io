import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import WOW from "wowjs";

const img = require('../shed-lmu2.png');
const fullPageStyle = {
  height: '100vh',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class Home extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div id="home">

        <div className="full-page-image" style={fullPageStyle}>
          <div className="overlay"></div>
          <div className="center-page-caption text-center text-white">
            <div className ="full-width">
              <h1 className="main-heading wow bounceInRight" data-wow-delay="0.4s">MobieDock</h1>
              <h3 className="text-white wow fadeInUp" data-wow-delay="0.8s"> Charge. Organize. Monetize.</h3>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
