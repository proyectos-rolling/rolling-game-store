import React from "react";
import { useParams } from "react-router-dom";
import * as LS from "../../helpers/LSmanager";

const GameDescription = ({ games }) => {
  const { gameId } = useParams();
  const game = games.filter((game) => game._id === gameId)[0] || {name:"", description: "", price: 0}; //filtro los juegos por el id, como devuelve un array, elijo el primer (y único) item

  const addItem = (e) => {
    e.preventDefault();
    LS.Add("gamesCart", game._id);
  };

  const delItem = (e) => {
      e.preventDefault();
      LS.Delete("gamesCart", e.target.delete.value);
  }

  return (
    <div>
      <p>{game.name}</p>
      <p>{game.description}</p>
      <p>{game.price}</p>
      <button onClick={addItem}>Comprar</button>
    </div>
  );
};

export default GameDescription;
