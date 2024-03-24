import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "../styles/BootstrapNavBar.css";
import collegeLogo2 from "../img/home/mgmlogo.jpeg";
export default function BootstrapNavBar() {
  return (
    <Navbar bg="transpernt" expand="md">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand> */}
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/comitee">Commitee</Nav.Link>
            <Nav.Link href="/speaker">Speakers</Nav.Link>
            <NavDropdown title="For Attendees" id="basic-nav-dropdown">
              <NavDropdown.Item href="/schedule">
                Schedule
              </NavDropdown.Item>
              <NavDropdown.Item href="/venue">
                Venue
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Call For Paper" id="basic-nav-dropdown">
              <NavDropdown.Item href="/callForPaper">
                Call For Paper
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Important Dates
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/submit"><Button variant="light">Submit</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
