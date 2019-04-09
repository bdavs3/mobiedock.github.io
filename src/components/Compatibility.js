import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container } from 'react-bootstrap';
import './Compatibility.css';

import WOW from 'wowjs';



export default class Compatibility extends Component {
  componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
  }

  render() {
    return (
      <div>
        <section id="compatibility" className="bg-blue text-center">
          <Container className="py-4">
            <h1 > Compatibility </h1>
            <h4 className ="py-1"> Our charging stations are compatible with any electric scooter </h4>
          </Container>

          <Container>
            <Row className="py-2">
              <Col>
                <Image className="scooter-logo" src={require("../images/bird-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/lime-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/jump-logo.png")}/>
                <Image className="scooter-logo" src={require("../images/spin-logo.png")}/>
              </Col>
            </Row>
          </Container>


        </section>
      </div>


    )
  }
}
