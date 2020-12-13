import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Search from "./games/Search";
import CartMenu from "./cart/CartMenu"
import "./css/navbar.css";

const Sidebar = ({ games, cart }) => {
  return (
    <Navbar className="custom fixed-top shadow" expand="lg">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img
          alt=""
          src="/logo500.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        RollinGame Store
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
          <Search games={games} />
          <NavDropdown title="Login" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Login form</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/registro">
              No estás registrado aún? Hacé click aquí
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartMenu cart={cart}/>
    </Navbar>
  );
};

export default Sidebar;
