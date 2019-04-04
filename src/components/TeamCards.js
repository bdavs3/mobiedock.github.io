import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, CardDeck} from 'reactstrap';
import { Container} from 'react-bootstrap';
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


import WOW from "wowjs";

class CardExample extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
    <Container>
        <CardDeck className="text-white wow fadeInUp" data-wow-delay="0.8s">
            <Card>
                <CardImg top width="100%" src={billy} alt="Billy Walker" />
                <CardBody>
                <CardTitle>Billy Walker</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={masaki} alt="Masaki Takamatsu" />
                <CardBody>
                <CardTitle>Masaki Takamatsu</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={charity} alt="Charity Waddy" />
                <CardBody>
                <CardTitle>Charity Waddy</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
        </CardDeck>

        <CardDeck className="text-white wow fadeInUp" data-wow-delay="0.8s">
            <Card>
                <CardImg top width="100%" src={andre} alt="Andre De Leon" />
                <CardBody>
                <CardTitle>Andre De Leon</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={ahmad} alt="Ahmad Kalifeh" />
                <CardBody>
                <CardTitle>Ahmad Kalifeh</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={matt} alt="Matthew Tejada" />
                <CardBody>
                <CardTitle>Matthew Tejada</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
        </CardDeck>

        <CardDeck className="text-white wow fadeInUp" data-wow-delay="0.8s">
            <Card>
                <CardImg top width="100%" src={emily} alt="Emily Shoji" />
                <CardBody>
                <CardTitle>Emily Shoji</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'github']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fas', 'user-circle']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={nico} alt="Danico Pidlaoan" />
                <CardBody>
                <CardTitle>Danico Pidlaoan</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'github']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fas', 'user-circle']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={ben} alt="Ben Davis" />
                <CardBody>
                <CardTitle>Ben Davis</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'github']}/></button>
                <button><FontAwesomeIcon ClassName="icon" icon={['fas', 'user-circle']}/></button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={alex} alt="Alex Lee" />
                <CardBody>
                <CardTitle>Alex Lee</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <button><FontAwesomeIcon ClassName="icon" icon={['fab', 'linkedin']}/></button>
                </CardBody>
            </Card>
        </CardDeck>

    </Container>
     

    )
  }
}

export default CardExample;
