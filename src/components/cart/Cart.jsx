import React from "react";
import {Container, Table, Button, Alert} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Price from "../games/Price"
import "./css/cart.css"

const trashIcon = <FontAwesomeIcon icon={faTrash} />;

const Cart = ({ cart, deleteFromCart, clearCart, loggedUser, totalPrice, setTotalPrice }) => {

  if(cart.length === 0){ //si no hay juegos
    return <h1 className="text-center">No hay juegos en el carrito</h1>
  } else { //o sea q hay juegos
    return (
      <Container>
        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="mt-2"
        >
          <thead>
            <tr>
              <th colSpan="4">Estas Comprando....</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((game) => (
              <tr key={game._id}>
                <td className="w-25 d-none d-md-table-cell">
                  <img
                    className="w-100"
                    src={`images/${game.images.poster_image_url}`}
                    alt={game.name}
                  />
                </td>
                <td>
                  <h3 key={game._id} className="text-white">
                    {game.name}
                  </h3>
                </td>
                <td>
                  <h3 key={game._id} className="text-white">
                    <Price game={game} />
                  </h3>
                </td>
                <td>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => deleteFromCart(game)}
                  >
                    {trashIcon}
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="display-5 text-center" colSpan={4}>
                <span className="d-none d-md-inline">
                  El total de la compra es:
                </span>{" "}
                ${totalPrice}
              </td>
            </tr>
          </tbody>
        </Table>

        {loggedUser.email === "" ? (
          <Alert className="text-center" variant={"danger"}>
            Debe iniciar sesión para completar la compra
          </Alert>
        ) : (
          <Button variant="success" active block as={Link} to="/checkout">
            Confirmar Compra
          </Button>
        )}
        <button
          className="btn btn-danger btn-sm my-3 d-block mx-auto"
          onClick={() => clearCart()}
        >
          Limpiar Carrito
        </button>
      </Container>
    );
  }
};

export default Cart;
