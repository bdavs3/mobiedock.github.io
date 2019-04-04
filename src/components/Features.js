import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container, Carousel } from 'react-bootstrap';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const img = require('../images/dock-render-1.jpg');
const img2 = require('../images/dock-render-2.jpg');
const img3 = require('../images/dock-render-3.jpg');

const render1 = require('../images/dock1.jpg');
const render2 = require('../images/dock2.jpg');
const render3 = require('../images/dock-render-3.jpg');

const gifVideo = require('../images/dock-render-3.jpg');

const fullImageSlider = {
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullImageSlider2 = {
  backgroundImage: `url(${img2})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullImageSlider3 = {
  backgroundImage: `url(${img3})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullRenderSlider = {
  backgroundImage: `url(${render1})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullRenderSlider2 = {
  backgroundImage: `url(${render2})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const fullRenderSlider3 = {
  backgroundImage: `url(${render3})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const gifBackground = {
  backgroundImage: `url("https://thumbs.gfycat.com/GiddyWildGalapagosalbatross-max-1mb.gif")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}




export default class Features extends Component {
  render() {
    return (
      <div>
        <section id="features" className="bg-black text-center">

          <Container fluid>
            <Row className="row-eq-height">
              <Col bg={6} md={6} sm={12} className="p-0">
                  <div className="full-div-image">
                    <Carousel>
                      <Carousel.Item className="full-div-image" style={fullImageSlider}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullImageSlider2}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullImageSlider3}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>;
                  </div>
              </Col>
              <Col bg={6} md={6} sm={12} className="p-0">
                <div className="full-div-image bg-gray">
                  <div className="overlay"></div>
                  <div className="center-page-caption text-center">
                    <div className ="full-width">
                      <h1>Features</h1>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>


            <Row className="row-eq-height">
              <Col bg={6} md={6} sm={12} className="p-0">
                <div className="full-div-image bg-gray" style={gifBackground}>
                  <div className="overlay"></div>
                  <div className="center-page-caption text-center">
                    <div className ="full-width">
                      <FontAwesomeIcon className="icon-button" icon="play-circle" />
                      <h1>Watch In Action</h1>
                    </div>
                  </div>
                </div>
              </Col>
              <Col bg={6} md={6} sm={12} className="p-0">
                  <div className="full-div-image">
                    <Carousel>
                      <Carousel.Item className="full-div-image" style={fullRenderSlider}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullRenderSlider2}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullRenderSlider3}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>;
                  </div>
              </Col>

            </Row>
          </Container>


        </section>
      </div>


    )
  }
}
