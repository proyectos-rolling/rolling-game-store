import React from 'react'
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const CartMenu = ({cart}) => {
  return (
    <Nav.Link as={Link} to="/carrito">
      <h4 className="mt-1 mb-1">
        {cartIcon} {cart.length > 0 && <span>({cart.length})</span>}
        <div>
          {cart.length > 0 && cart.map((game) => <p>{game.name}</p>)}
        </div>
      </h4>
    </Nav.Link>
  );
}

export default CartMenu
