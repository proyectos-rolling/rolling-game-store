import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import {Row} from "react-bootstrap";

const GameCards = ({ games, addItem }) => {
  const [gamesToShowInMain, setGamesToShowInMain] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Paginación
  const indexOfLastGame = currentPage * gamesToShowInMain;
  const indexOfFirstGame = indexOfLastGame - gamesToShowInMain;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  // Campiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(games.length / gamesToShowInMain); i++) {
    pageNumbers.push(i);
  }

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
    window.addEventListener("resize", displayWindowSize);
  }, []);

  return (
    <>
      <h1 id="all-games-title">Todos nuestros juegos</h1>
      <Row>
        {currentGames.map((game) => (
          <GameCard game={game} addItem={addItem} key={game._id} />
        ))}
      </Row>
      <Row>
        <nav className="mx-auto mt-4">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => {
                    paginate(number);
                  }}
                  href="#all-games-title"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Row>
    </>
  );
};

export default GameCards;
