import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="/logo500.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Rolling Game Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/conocenos">
            Conocenos
          </Nav.Link>
          <Nav.Link as={Link} to="/servicios">
            Servicios
          </Nav.Link>
          <Nav.Link as={Link} to="/tienda">
            Tienda
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Login" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Login form</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/registro">
              No estás registrado aún? Hacé click aquí
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar
