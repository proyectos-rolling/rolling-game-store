import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Search from "./games/Search";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const Sidebar = ({ games }) => {
  return (
    <Navbar className="custom" expand="lg">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
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
      <Nav.Link as={Link} to="/tienda">
        <h4 className="mt-1 mb-1">{cartIcon}</h4>
      </Nav.Link>
    </Navbar>
  );
};

export default Sidebar;
