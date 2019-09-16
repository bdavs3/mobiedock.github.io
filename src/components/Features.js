import React, { Component } from 'react';
import { Row, Col, Image, Button, Container, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WOW from 'wowjs';
import './Features.css';

const img = require('../images/dock-render-1.jpeg');
const img2 = require('../images/dock-render-2.jpeg');
const img3 = require('../images/dock-render-3.jpg');

const render1 = require('../images/dock1.jpeg');
const render2 = require('../images/dock2.jpeg');

const gif1 = require('../images/how_to_1.gif');
const gif2 = require('../images/how_to_2.gif');
const gif3 = require('../images/how_to_3.gif');

const demonstrationUrl = 'https://www.youtube.com/watch?v=wN88FOp9Z6U';

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

export default class Features extends Component {
  componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
  }

  render() {
    return (
      <div>
        <section id="feature" className="py-5">
            <div className=" container text-center my-5">
                <h1> Features </h1>
            </div>
        </section>

        <section id="features" className="bg-black text-center">
          <Container fluid>
            <Row className="row-eq-height">
              <Col bg={6} md={6} sm={12} className="p-0">
                  <div className="full-div-image">
                    <Carousel>
                      <Carousel.Item className="full-div-image" style={fullImageSlider}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Unidirectional Model - Front</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullImageSlider3}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Unidirectional Model - Back</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullImageSlider2}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>Omnidirectional Model</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
              </Col>
              <Col bg={6} md={6} sm={12} className="p-0">
                  <div className="full-div-image">
                    <Carousel>
                      <Carousel.Item className="full-div-image" style={fullRenderSlider}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>On Campus</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item className="full-div-image" style={fullRenderSlider2}>
                        <div className="overlay"></div>
                        <Carousel.Caption>
                          <h3>In the City</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
              </Col>
            </Row>
          </Container>

        </section>

        <section id="compatibility" className="bg-blue text-center">
          <Container className="py-4">
            <h1 > Compatibility </h1>
            <h4 className ="py-1"> Our stations charge any electric scooter.</h4>
          </Container>

          <Container>
            <Row className="py-2">
              <Col>
                <Image className="scooter-logo" src={require("../images/bird-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/lime-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/jump-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/spin-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/and-more.png")}/>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container fluid>
            <Row className="row-eq-height">
              <Col style={{padding: "0px"}} sm={12} md={12} lg={4}>
                <a href={demonstrationUrl} target="_blank"><img className="gifs" src={gif1}/></a>
              </Col>
              <Col style={{padding: "0px"}} sm={12} md={12} lg={4}>
                <a href={demonstrationUrl} target="_blank">
                  <FontAwesomeIcon id="play-button" className="icon" icon="play-circle" />
                </a>
                <a href={demonstrationUrl} target="_blank"><img className="gifs" src={gif2}/></a>
              </Col>
              <Col style={{padding: "0px"}} sm={12} md={12} lg={4}>
                <a href={demonstrationUrl} target="_blank"><img className="gifs" src={gif3}/></a>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}
