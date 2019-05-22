import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button, Container, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player';
import WOW from 'wowjs';
import './Awards.css';
import { faCentercode } from '@fortawesome/free-brands-svg-icons';

const teamImg = require('../images/TcuV&V_awards_photo.jpg');
const competitionLink = 'http://www.neeley.tcu.edu/vandv/';

var h3Style = {
    textAlign: "center",
};

export default class Features extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return (
            <div id="awards">
                <section id="award" className="py-5">
                    <div className=" container text-center my-5">
                        <h1> An Award-Winning Idea </h1>
                    </div>
                </section>
                <section>
                    <Container>
                        <Row className="row-eq-height">
                            <Col sm={12} md={6} bg={6} className="wow fadeInUp" data-wow-delay="0.5s">
                            <a href={competitionLink}><Image src={teamImg} fluid /></a>
                            </Col>
                            <Col sm={12} md={6} bg={6} className="wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-list-col2">
                                    <a href={competitionLink}><h2 style={{textAlign: 'center'}}>TCU Values &amp; Ventures</h2></a>
                                    <p>Mobiedock was a grand finalist and honorable mention at <a href={competitionLink}>this event</a>, which included over 50 teams that earned selection from a pool of 150 applicants.</p>
                                    <br/>
                                    <p>Teams pitched socially conscious ideas that were judged on feasability and impact by dozens of highly successful entrepreneurs that converged from around the country.</p>
                                    <br/>
                                    <p>For their placement, the team was awarded with cash and other tools to support business growth.</p>
      						    </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}