import React from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = ({ games }) => {
  const gamesToShowInMain = 4;

  return (
    <Row>
      {games.slice(0, gamesToShowInMain).map((game) => (
        <GameCard game={game} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
