import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import WOW from "wowjs";
import { Link, animateScroll as scroll } from "react-scroll";

const img = require('../images/home_img.png');
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
              <h3 className="small-heading text-white wow fadeInUp" data-wow-delay="0.8s">The world's first 100% renewable shared-device charging solution.</h3>

              <Link className="link"
                  activeClass="active"
                  to="problem"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a href="#problem" class="btn btn-primary btn-xl rounded-pill mt-4 wow fadeInUp" data-wow-delay="0.8s"> Learn More </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
