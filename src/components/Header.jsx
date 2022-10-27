import { BiCameraMovie } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="danger" href="#home">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <BiCameraMovie /> HackFlix
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle bg="dark" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse bg="dark" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about-us"
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact-us"
              >
                Contact
              </Link>
            </Nav.Link>
            <NavDropdown title="Search" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">
                <Link style={{ textDecoration: "none" }} to="/search-by-title">
                  Search by title
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/acerca-de-HackFlix"
                >
                  Search by rating
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
