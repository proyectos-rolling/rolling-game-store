import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Search from "./games/Search";
import CartMenu from "./cart/CartMenu"
import "./css/navbar.css";
import LoginOut from "./sessions/LoginOut";

const Sidebar = ({ games, cart, loggedUser, setLoggedUser }) => {
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
        RollinGame <span className="d-none d-sm-inline">Store</span>
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
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            Admin
          </Nav.Link>

        </Nav>
        <Nav>
          <Search games={games} />
          <LoginOut loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        </Nav>
      </Navbar.Collapse>
      <CartMenu cart={cart} />
    </Navbar>
  );
};

export default Sidebar;
