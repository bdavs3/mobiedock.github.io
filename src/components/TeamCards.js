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
import alex from '../images/team-imgs/alex.png';
import ahmad from '../images/team-imgs/ahmad.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WOW from 'wowjs';

const CARD_DELAY = "0.25s";

class CardExample extends Component {
	componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
	}

	render() {
		return (
			<Container className="cards">
				<CardDeck className="deck lead wow fadeInUp" data-wow-delay={CARD_DELAY}>
					<Card>
						<CardImg className="photo" top width="100%" src={billy} alt="Billy Walker" />
						<CardBody>
							<CardTitle className="cardTitle">Billy Walker</CardTitle>
							<CardSubtitle className="subtitle">CEO / Co-founder</CardSubtitle>
							<CardText className="text">
							Billy combines his innovative engineering background with a customer focused business sense to develop high value ventures. Billy's sales experience– both B2B and ecommerce– has summed to six digits in sales as a college student. An extensive tech, healthcare, and education network in Los Angeles, Silicon Valley, and Minneapolis gives Billy and MobieDock the avenues for success.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/billy-walker-4aa914111/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={masaki} alt="Masaki Takamatsu" />
						<CardBody>
							<CardTitle className="cardTitle">Masaki Takamatsu</CardTitle>
							<CardSubtitle className="subtitle">CTO / Co-founder</CardSubtitle>
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
				</CardDeck>

				<CardDeck className="lead wow fadeInUp" data-wow-delay={CARD_DELAY}>
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
					<Card>
						<CardImg className="photo" top width="100%" src={ben} alt="Ben Davis" />
						<CardBody>
							<CardTitle className="cardTitle">Ben Davis</CardTitle>
							<CardSubtitle className="subtitle">Head of Software Systems</CardSubtitle>
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
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={matt} alt="Matthew Tejada" />
						<CardBody>
							<CardTitle className="cardTitle">Matthew Tejada</CardTitle>
							<CardSubtitle className="subtitle">CFO</CardSubtitle>
							<CardText className="text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://linkedin.com/in/charity-waddy-b48668112">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>
					
				<CardDeck className="lead wow fadeInUp" data-wow-delay={CARD_DELAY}>
					<Card>
						<CardImg className="photo" top width="100%" src={ahmad} alt="Ahmad Kalifeh" />
						<CardBody>
							<CardTitle className="cardTitle">Ahmad Kalifeh</CardTitle>
							<CardSubtitle className="subtitle">Mechanical Engineer</CardSubtitle>
							<CardText className="text">
								Ahmad is a Mechanical Engieer with experience in automation, Design of Experiments methodology application, and design for manufacturing from my work at Mattel, cost-cutting and efficiency improving methods from my work with Avcorp and Mattel, and research skills and rapid prototyping from my work at Emergent Energy.							</CardText>
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
					<Card>
						<CardImg className="photo" top width="100%" src={alex} alt="Alex Lee" />
						<CardBody>
							<CardTitle className="cardTitle">Alex Lee</CardTitle>
							<CardSubtitle className="subtitle">Electrical Engineer</CardSubtitle>
							<CardText>
								Alex is both a talented electrical engineer and athlete. At Mobiedock, he is working on electrical hardware components for the stations.  He is also on a team at Loyola Marymount that is implementing an innovative space technology within the Earth-Moon-Earth communication project.  When he's not tinkering with circuit boards and modeling software, Alex competes at a national level in kayaking with Team USA and is training for the 2020 Olympics.  
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card>
						<CardImg className="photo" top width="100%" src={andre} alt="Andre De Leon" />
						<CardBody>
							<CardTitle className="cardTitle">Andre De Leon</CardTitle>
							<CardSubtitle className="subtitle">Mechanical Engineer</CardSubtitle>
							<CardText>
								Mechanical Engineering Major with proven success collaborating in a team environment, leading design improvement initiatives, and establishing project management milestones. Expertise in CAD drafting, model analysis, and 3D prototyping.
							</CardText>
						</CardBody>
						<CardFooter>
							<a href="http://google.com">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>
				
				<CardDeck className="deck2 lead wow fadeInUp mt-2" data-wow-delay={CARD_DELAY}>
					<Card>
						<CardImg className="photo" top width="100%" src={emily} alt="Emily Shoji" />
						<CardBody>
							<CardTitle className="cardTitle">Emily Shoji</CardTitle>
							<CardSubtitle className="subtitle">Frontend Developer</CardSubtitle>
							<CardText>
								A Software Developer originally from Seattle, WA, Emily enjoys, math, teaching, and being outdoors.
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
							<CardSubtitle className="subtitle">Project Manager / Frontend Developer</CardSubtitle>
							<CardText>
								An asipring Software Developer and Project Manager, Nico is driven by a desire to create products and solutions with others. 
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
				</CardDeck>
			</Container>
		);
	}
}

export default CardExample;