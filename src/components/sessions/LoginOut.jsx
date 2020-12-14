import React from "react";
import Login from "./Login";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import * as LS from "../../helpers/LSmanager";

const LoginOut = ({ loggedUser, setLoggedUser }) => {
  if (loggedUser.email === "" || loggedUser.email === undefined) {
    return (
      <NavDropdown title="Login" id="basic-nav-dropdown" alignRight>
        <NavDropdown.Item href="#login">
          <Login setLoggedUser={setLoggedUser} />
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/registro">
          No estás registrado aún? Hacé click aquí
        </NavDropdown.Item>
      </NavDropdown>
    );
  } else {
    return (
      <>
        <Navbar.Text>Bienvenido {loggedUser.email}! </Navbar.Text>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => {
            setLoggedUser({ email: "", admin: false });
            LS.Set("loggedUser", { email: "", admin: false });
          }}
        >
          Salir
        </button>
      </>
    );
  }
};

export default LoginOut;
