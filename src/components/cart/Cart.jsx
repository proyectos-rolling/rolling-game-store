import React from "react";
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const trashIcon = <FontAwesomeIcon icon={faTrash} />;

const Cart = ({ cart, deleteFromCart, clearCart }) => {
  return (
    <Container>
<Table striped bordered hover variant="dark" className="mt-2">
<thead>
          <tr>
            <th colSpan="3">Estas Comprando....</th>
          </tr>
        </thead>
        {cart.length === 0 && <h1>No hay juegos en el carrito</h1>}
        {cart.map((game) => (
          <tbody>
            <tr>
              <td className="w-25">
                <img
                className="w-100"
                  src={`images/${game.images.poster_image_url}`}
                  alt={game.name}
                />
              </td>
              <td>
                <h3 key={game._id} className="text-white flex-grow">
                  {game.name}
                </h3>
              </td>
              <td><button className="btn btn-danger w-100" onClick={() => deleteFromCart(game)}>{trashIcon}</button></td>
            </tr>
      </tbody>
  ))}
</Table>
  {cart.length !== 0 && <button className="btn btn-danger" onClick={() => clearCart()}>Limpiar Carrito</button>}
  </Container >
  );
};

export default Cart;
