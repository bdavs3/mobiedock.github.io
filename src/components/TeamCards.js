import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, CardFooter } from 'reactstrap';
import { Container } from 'react-bootstrap';
import './TeamCards.css';

import emily from '../images/team-imgs/emily.jpeg';
import nico from '../images/team-imgs/nico.jpeg';
import ben from '../images/team-imgs/ben.jpeg';
import andre from '../images/team-imgs/Andre.jpeg';
import billy from '../images/team-imgs/billy.jpeg';
import charity from '../images/team-imgs/charity.jpeg';
import masaki from '../images/team-imgs/masaki.jpeg';
import matt from '../images/team-imgs/matt.jpeg';
import alex from '../images/team-imgs/profile.png';
import ahmad from '../images/team-imgs/ahmad.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WOW from 'wowjs';

class CardExample extends Component {
	componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
	}

	render() {
		return (
			<Container className="cards">
				<CardDeck className="lead wow fadeInUp" data-wow-delay="0.5s">
					<Card>
						<CardImg className="photo" top width="100%" src={billy} alt="Billy Walker" />
						<CardBody>
							<CardTitle className="cardTitle">Billy Walker</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={masaki} alt="Masaki Takamatsu" />
						<CardBody>
							<CardTitle className="cardTitle">Masaki Takamatsu</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This card has supporting text below as a natural lead-in to additional content.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={charity} alt="Charity Waddy" />
						<CardBody>
							<CardTitle className="cardTitle">Charity Waddy</CardTitle>
							<CardSubtitle className="subtitle">COO/Founder</CardSubtitle>
							<CardText className="text">
								Mechanical Engineering student with experience in sales, organization, and development.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://linkedin.com/in/charity-waddy-b48668112">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>

				<CardDeck className="lead wow fadeInUp" data-wow-delay="0.5s">
					<Card>
						<CardImg className="photo" top width="100%" src={andre} alt="Andre De Leon" />
						<CardBody>
							<CardTitle className="cardTitle">Andre De Leon</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={ahmad} alt="Ahmad Kalifeh" />
						<CardBody>
							<CardTitle className="cardTitle">Ahmad Kalifeh</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This card has supporting text below as a natural lead-in to additional content.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={matt} alt="Matthew Tejada" />
						<CardBody>
							<CardTitle className="cardTitle">Matthew Tejada</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>

				<CardDeck className="lead wow fadeInUp" data-wow-delay="0.5s">
					<Card>
						<CardImg className="photo" top width="100%" src={emily} alt="Emily Shoji" />
						<CardBody>
							<CardTitle className="cardTitle">Emily Shoji</CardTitle>
							<CardSubtitle className="subtitle">Software Developer</CardSubtitle>
							<CardText className="text">
								A Computer Science Major & Pure Mathematics minor from Seattle, WA who enjoys front-end development.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/emily-shoji/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
							<a href="https://github.com/ItsEmShoji">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'github' ]} />
							</a>
							<a href="https://itsemshoji.github.io/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fas', 'user-circle' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={nico} alt="Danico Pidlaoan" />
						<CardBody>
							<CardTitle className="cardTitle">Danico Pidlaoan</CardTitle>
							<CardSubtitle className="subtitle">Software Developer</CardSubtitle>
							<CardText className="text">
								This card has supporting text below as a natural lead-in to additional content.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/danico-pidlaoan/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
							<a href="https://github.com/danicobryan">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'github' ]} />
							</a>
							<a href="https://danicobryan.github.io/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fas', 'user-circle' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={ben} alt="Ben Davis" />
						<CardBody>
							<CardTitle className="cardTitle">Ben Davis</CardTitle>
							<CardSubtitle className="subtitle">Software Developer</CardSubtitle>
							<CardText className="text">
								Ben is involved with app development and software system integration.  Aside from computer science, Ben takes interest in electronic music, running, and physics.  Mobiedock is an intersection of many of the fields within computer science that he is particularly excited about.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/ben-davis-a34a55149/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
							<a href="https://github.com/bdavs3">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'github' ]} />
							</a>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fas', 'user-circle' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>
				<CardDeck className=" alex lead wow fadeInUp" data-wow-delay="0.5s" >
					<Card>
						<CardImg className="photo" top width="100%" src={alex} alt="Alex Lee" />
						<CardBody>
							<CardTitle className="cardTitle">Alex Lee</CardTitle>
							<CardSubtitle className="subtitle">Card subtitle</CardSubtitle>
							<CardText className="text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>
			</Container>
		);
	}
}

export default CardExample;