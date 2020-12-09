import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;

const GameDescription = ({ games, addItem }) => {
  const { gameId } = useParams();
  const game = games.filter((game) => game._id === gameId)[0] || {
    name: "",
    description: "",
    price: 0,
  }; //filtro los juegos por el id, como devuelve un array, elijo el primer (y único) item

  return (
    <div>
      <p>{game.name}</p>
      <p>{game.description}</p>
      <p>{game.price}</p>
      <h1 style={{ cursor: "pointer" }} onClick={(e) => addItem(e, game)}>
        {cartIcon}
      </h1>
    </div>
  );
};

export default GameDescription;
