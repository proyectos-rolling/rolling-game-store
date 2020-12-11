import React from "react";

const Cart = ({ cart, deleteFromCart, clearCart }) => {
  return (
    <div>
      {cart.length === 0 && <h1>No hay juegos en el carrito</h1>}
      {cart.map((game) => (
        <h1 key={game._id}>
          {game.name} <button onClick={() => deleteFromCart(game)}>X</button>
        </h1>
      ))}
      {cart.length !== 0 && <button className="btn btn-danger"onClick={() => clearCart()}>Limpiar Carrito</button>}
    </div>
  );
};

export default Cart;
