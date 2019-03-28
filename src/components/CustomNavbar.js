import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (

      <Navbar default collapseOnSelect bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">MobieDock</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#about">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              About
            </Link>
          </Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

    )
  }
}
