import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Row, Col, Image, Button, Container, Carousel } from 'react-bootstrap';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';
import logo from "../images/mobiedock.png";

import './Footer.css'

const FooterPage = () => {
  return (
    <div className="footer bg-black py-3">
      <Container>
        <a href="#home"> <img src={logo} alt="logo"/></a> &copy; {new Date().getFullYear()}
      </Container>
    </div>
  );
}

export default FooterPage;
