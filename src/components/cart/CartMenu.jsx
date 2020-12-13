import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './css/cart.css'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const CartMenu = ({ cart }) => {
  return (
    <Nav.Link as={Link} to="/carrito" className="position-relative test1">
      <h4 className="mt-1 mb-1">
        {cartIcon} {cart.length > 0 && <span>({cart.length})</span>}
      </h4>

      <div className="position-absolute bg-dark cart123" style={cartListStyle}>
        {cart.length > 0 && cart.map((game) => <p key={game._id}>{game.name}</p>)}
      </div>
    </Nav.Link>
  );
};

export default CartMenu;

const cartListStyle = {
  zIndex: "100",
  width: "10rem",
  marginLeft: "-7rem",
  bcolor:"white",
};
