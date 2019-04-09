import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import './Profiles.css';

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
import WOW from "wowjs";

class CardExample extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
    <MDBRow>
      <MDBRow className="wow fadeInUp" data-wow-delay="0.8s" >
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={billy}/>
            <MDBCardBody cascade>
              <MDBCardTitle>Billy Walker</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={masaki} />
            <MDBCardBody cascade>
              <MDBCardTitle>Masaki Takamatsu</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={charity} />
            <MDBCardBody cascade>
              <MDBCardTitle>Charity Waddy</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="wow fadeInUp" data-wow-delay="0.8s">
      <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={ahmad} />
            <MDBCardBody cascade>
              <MDBCardTitle>Ahmad Kalifeh</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={andre} />
            <MDBCardBody cascade>
              <MDBCardTitle>Andre De Leon</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={matt} />
            <MDBCardBody cascade>
              <MDBCardTitle>Matthew Tejada</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="wow fadeInUp" data-wow-delay="0.8s">
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={emily}/>
            <MDBCardBody cascade>
              <MDBCardTitle>Emily Shoji</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={ben} />
            <MDBCardBody cascade>
              <MDBCardTitle>Ben Davis</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={nico} />
            <MDBCardBody cascade>
              <MDBCardTitle>Danico Pidlaoan</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src={alex} />
            <MDBCardBody cascade>
              <MDBCardTitle>Alex Lee</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBRow>

    )
  }
}

export default CardExample;
