import React from "react";

const Cart = ({ cart, deleteFromCart }) => {
  return (
    <div>
      {cart.length===0 && <h1>No hay juegos en el carrito</h1>}
      {cart.map((game) => (
        <h1 key={game._id}>
          {game.name} <button onClick={() => deleteFromCart(game)}>X</button>
        </h1>
      ))}
    </div>
  );
};

export default Cart;
