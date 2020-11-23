import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = () => {
  const url = "http://localhost:4000/api/games";
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setGames(json);
      })
      .catch((error) => console.error("Hubo un error en el fetch: ", error));
  }, []);

  return (
    <Row>
      {games.map((game) => (
        <GameCard game={game} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
