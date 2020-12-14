import React from "react";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Cart = ({ cart, deleteFromCart, clearCart }) => {
  return (
    <Container>
    
      {cart.length === 0 && <h1>No hay juegos en el carrito</h1>}
      {cart.map((game) => (
        <Jumbotron className="bg-dark justify-content-between align-items-center row m-2">
        <img
                className="d-block h-25 w-25"
                src={`images/${game.images.poster_image_url}`}
                alt={game.name}
                />
        <h3 key={game._id} className="text-white flex-grow">
        {game.name}
        </h3> 
        <button className="btn btn-danger h-50" onClick={() => deleteFromCart(game)}>Quitar del Carrito</button>
        
        </Jumbotron>
      ))}
    <div className="justify-content-center row">
    {cart.length !== 0 && <button className="btn btn-danger" onClick={() => clearCart()}>Limpiar Carrito</button>}
    </div>
    </Container>
  );
};

export default Cart;
