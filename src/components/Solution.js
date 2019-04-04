import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Solution.css';


export default class Solution extends Component {
  render() {
    return (
      <div>
        <section id="about" className="py-5">
          <div className=" container text-center my-5">
            <h1> Our Solution </h1>
            <h6 className="my-4">
            MobieDock is the first sustainably powered eDocking and charging solution for the shared micromobility market.
            Sleek stations declutter your city or campus, charge devices all day and night, and monetize this growing market –
            all while harnessing the sun’s energy for zero emissions.
            </h6>
          </div>
        </section>

        <section className="main-section">
      		<Container>
      		  <Row>

              <Col lg={6} sm={6} className="text-left">
                <Image src={require('../images/dock-solo-1.jpg')} fluid roundedCircle/>
              </Col>

              <Col lg={6} sm={6}>

      					<div className="service-list">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="solar-panel" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Go Green</h3>
      							<p>Use leading-edge solar technology for a zero net energy charging solution.</p>
      						</div>
      					</div>
      					<div className="service-list">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="sitemap" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Organize</h3>
      							<p>Dock shared MDs for increased organization and safety.</p>
      						</div>
      					</div>
      					<div className="service-list">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="money-check-alt" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Monetize</h3>
      							<p>Monetize charging and traffic to benefit all parties.</p>
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
