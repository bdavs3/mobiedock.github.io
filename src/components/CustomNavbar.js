import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (

      <Navbar default collapseOnSelect bg="dark" variant="dark" fixed="top" className="nav">
        <Navbar.Brand href="#home">
          <img src={require("../images/mobiedock.png")}/>
        </Navbar.Brand>


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
          <Nav.Link href="#problem">
            <Link
                activeClass="active"
                to="problem"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Problem
            </Link>
          </Nav.Link>

          <Nav.Link href="#solution">
            <Link
                activeClass="active"
                to="solution"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Solution
              </Link>
          </Nav.Link>

          <Nav.Link href="#team">
            <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Our Team
              </Link>
          </Nav.Link>

        </Nav>
      </Navbar>

    )
  }
}
