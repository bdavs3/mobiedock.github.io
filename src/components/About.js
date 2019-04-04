import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container } from 'react-bootstrap';
import './About.css';

import WOW from 'wowjs';

const img = require('../images/scooter-clutter.jpg');
const img2 = require('../images/electric-grid.jpg');
const img3 = require('../images/bird-clutter2.jpg');

const fullDivStyle = {
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullDivStyle2 = {
  backgroundImage: `url(${img2})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullDivStyle3 = {
  backgroundImage: `url(${img3})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default class About extends Component {
  componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
  }
  
  render() {
    return (
      <div>
        <section id="problem" className="bg-black text-center">
          <Container className="py-5">
            <h1 > What We're Solving </h1>
          </Container>

          <Container fluid>
            <Row className="row-eq-height">
              <Col bg={4} md={4} sm={12} className="p-0">
                  <div className="full-div-image" style={fullDivStyle}>
                    <div className="overlay"></div>
                    <div className="center-page-caption text-center text-white">
                      <div className ="full-width">
                        <h3 class = "wow rollIn" data-wow-delay="0.8s">Cluttered Streets</h3>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col bg={4} md={4} sm={12} className="p-0">
                <div className="full-div-image" style={fullDivStyle2}>
                  <div className="overlay"></div>
                  <div className="center-page-caption text-center text-white">
                    <div className ="full-width">
                      <h3 class = "wow rollIn" data-wow-delay="0.8s">CO2 Emissions</h3>
                    </div>
                  </div>
                </div>
              </Col>
              <Col bg={4} md={4} sm={12} className="p-0">
                <div className="full-div-image" style={fullDivStyle3}>
                  <div className="overlay"></div>
                  <div className="center-page-caption text-center text-white">
                    <div className ="full-width">
                      <h3 class = "wow rollIn" data-wow-delay="0.8s">Lack of Charging Infrastructure</h3>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>


        </section>
      </div>


    )
  }
}
