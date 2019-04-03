import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Team.css';

export default class About extends Component {
  render() {
    return (

      <section id="team" className="py-5">
        <div className=" container text-center my-5">
          <h1> Our Team </h1>
        </div>
      </section>

    )
  }
}
