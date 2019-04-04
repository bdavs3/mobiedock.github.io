import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import logo from "../images/mobiedock.png";

import './Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="center font-small pt-4 mt-4">
        <MDBContainer fluid>
        <a href="#home"> <img src={logo} alt="logo"/></a> &copy; {new Date().getFullYear()}
        </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;