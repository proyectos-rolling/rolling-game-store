import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Row from "react-bootstrap/Row";

const GameCards = ({ games, addItem }) => {
  const [gamesToShowInMain, setGamesToShowInMain] = useState(0);
  
  const displayWindowSize = () => {
    let size = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (size >= 992) {
      setGamesToShowInMain(15);
    } else if (size >= 768) {
      setGamesToShowInMain(12);
    } else {
      setGamesToShowInMain(5);
    }
  };

  useEffect(() => {
    displayWindowSize();
    window.addEventListener("resize", displayWindowSize)}, []);

  return (
    <Row>
      {games.slice(0, gamesToShowInMain).map((game) => (
        <GameCard game={game} addItem={addItem} key={game._id} />
      ))}
    </Row>
  );
};

export default GameCards;
