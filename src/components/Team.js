import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Container} from 'react-bootstrap';
import './Team.css';

import Profile from './TeamCards';

export default class About extends Component {
	render() {
		return (
			<section id="team" className="py-5">
				<div className=" container text-center my-4">
					<h1> Our Team </h1>
          <Profile></Profile>
				</div>
			</section>
		);
	}
}
