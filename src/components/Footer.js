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
        <a href="#home"> <img src={logo} alt="logo"/></a> 
        <p className="powered">Powered by:</p>
    </div>
  );
}

export default FooterPage;
