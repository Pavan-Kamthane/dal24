import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/BootstrapNavBar.css";
import collegeLogo2 from "../img/home/mgmlogo.jpeg";

export default function BootstrapNavBar() {
  return (
    <Navbar bg="transpernt" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={collegeLogo2}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          DAL '24
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {/* Use Link component instead of Nav.Link */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/comitee">
              Commitee
            </Nav.Link>
            <Nav.Link as={Link} to="/speaker">
              Speakers
            </Nav.Link>
            <NavDropdown title="For Attendees" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/schedule">
                Schedule
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/venue">
                Venue
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Call For Paper" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/callForPaper">
                Call For Paper
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/impdates">
                Important Dates
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/registration">
              Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/submit">
              <Button variant="light">Submit</Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
