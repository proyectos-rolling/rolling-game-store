import React from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = ({ games }) => {

  return (
    <Row>
      {games.map((game) => (
        <GameCard game={game} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
