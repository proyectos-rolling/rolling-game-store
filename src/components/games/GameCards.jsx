import React from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = ({ games, addItem }) => {
  const gamesToShowInMain = 8;

  return (
    <Row>
      {games.slice(0, gamesToShowInMain).map((game) => (
        <GameCard game={game} addItem={addItem} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
