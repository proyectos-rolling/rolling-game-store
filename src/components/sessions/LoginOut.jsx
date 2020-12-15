import React from "react";
import Login from "./Login";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import * as LS from "../../helpers/LSmanager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const userIcon = <FontAwesomeIcon className="mr-1" icon={faUserCircle} />;

const LoginOut = ({ loggedUser, setLoggedUser }) => {
  if (loggedUser.email === "" || loggedUser.email === undefined) {
    return (
      <NavDropdown title="Login" id="login-drop-down" alignRight>
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
      <NavDropdown
        title={userIcon}
        id="logout-drop-down"
        alignRight
        style={{ fontSize: "1.4rem" }}
      >
        <NavDropdown.Item>
          <button
            className="btn btn-sm btn-outline-danger btn-block"
            onClick={() => {
              setLoggedUser({ email: "", admin: false, name: "" });
              LS.Set("loggedUser", { email: "", admin: false, name: "" });
            }}
          >
            Cerrar sesión
          </button>
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
};

export default LoginOut;
