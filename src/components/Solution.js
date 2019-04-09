import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Solution.css';
import WOW from "wowjs";


export default class Solution extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div>
        <section id="solution" className="py-5">
          <div className=" container text-center my-5">
            <h1> Our Solution </h1>
            <h6 className="my-4 mx-5">
            MobieDock is the first sustainably powered eDocking and charging solution for the shared micromobility market.
            Sleek stations declutter your city or campus, charge devices all day and night, and monetize this growing market –
            all while harnessing the sun’s energy for zero emissions.
            </h6>
          </div>
        </section>

        <section className="main-section">
      		<Container>
      		  <Row>

              <Col lg={6} sm={6} className="text-left wow fadeInUp" data-wow-delay="0.5s">
                <Image src={require('../images/dock-solo-1.jpg')} fluid roundedCircle/>
              </Col>

              <Col lg={6} sm={6}>
                <Container>
                  <h1 className="py-3 wow fadeInUp" data-wow-delay="0.5s"> Charging Stations </h1>
                </Container>

      					<div className="service-list wow fadeInRight" data-wow-delay="0.5s">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="solar-panel" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Go Green</h3>
      							<p>Use leading-edge solar technology for a zero net energy charging solution.</p>
      						</div>
      					</div>
      					<div className="service-list wow fadeInRight" data-wow-delay="0.5s">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="sitemap" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Organize</h3>
      							<p>Dock shared MDs for increased organization and safety.</p>
      						</div>
      					</div>
      					<div className="service-list wow fadeInRight" data-wow-delay="0.5s">
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

        <section className="main-section py-5">
      		<Container className = "py-5">
      		  <Row>

              <Col lg={6} sm={6}>

                <Container>
                  <h1 className="py-3 wow fadeInUp" data-wow-delay="0.5s"> App Integration </h1>
                </Container>

      					<div className="service-list wow fadeInLeft" data-wow-delay="0.5s">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="map-marked-alt" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Find a Ride or Station</h3>
      							<p>Find nearby electric scooters or a place to charge.</p>
      						</div>
      					</div>
      					<div className="service-list wow fadeInLeft" data-wow-delay="0.5s">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="bookmark" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Book a Station</h3>
      							<p>Reserve a station near your destination.</p>
      						</div>
      					</div>
      					<div className="service-list wow fadeInLeft" data-wow-delay="0.5s">
      						<div className="service-list-col1">
      							<FontAwesomeIcon className="icon" icon="chart-bar" />
      						</div>
      						<div className="service-list-col2">
      							<h3>Track Your Rides</h3>
      							<p>See how much power you are saving by using MobieDocks.</p>
      						</div>
      					</div>
              </Col>

              <Col lg={6} sm={6} className="text-center wow fadeInUp" data-wow-delay="0.5s">
                <Image src={require('../images/homepage-1.png')} fluid/>
              </Col>


      			</Row>
      		</Container>
      	</section>

      </div>


    )
  }
}
