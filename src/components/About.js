import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

const img = require('../dock2.jpg');
const fullPageStyle = {
  height: '100%',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default class About extends Component {
  render() {
    return (

      <section id="about" className="py-5">
        <div className=" container text-center my-5">
          <h1> About Us </h1>
          <p className="my-4">
          MobieDock is the first sustainably powered eDocking and charging solution for the shared micromobility market. Sleek stations declutter your city or campus, charge devices all day and night, and monetize this growing market – all while harnessing the sun’s energy for zero emissions.
          </p>
        </div>
      </section>


    )
  }
}
