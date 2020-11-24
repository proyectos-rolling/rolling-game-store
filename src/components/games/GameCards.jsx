import React from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = ({games}) => {
  const gamesList = games;

  return (
    <Row>
      {gamesList.map((game) => (
        <GameCard game={game} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
