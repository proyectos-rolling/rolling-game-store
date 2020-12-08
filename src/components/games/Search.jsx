import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {Link} from "react-router-dom"

const Search = ({ games }) => {
  const [query, setQuery] = useState("");

  const filterGames = (query) => {
    let filteredGames;
    if (query !== "") {
      filteredGames = games.filter(
        (game) =>
          game.name.toLowerCase().includes(query.toLowerCase()) ||
          game.description.toLowerCase().includes(query.toLowerCase()) ||
          game.categories
            .map((e) => e.toLowerCase())
            .some((e) => e.includes(query.toLowerCase()))
      );
    } else {
      filteredGames = [];
    }
    return filteredGames;
  };
  const handleChange = async (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="gameSearch"
          id="gameSearch"
          placeholder="Enter a game name..."
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
      </form>
      <ListGroup
        style={{ maxHeight: "10rem", overflowY: "auto" }}
        variant="flush"
      >
        {filterGames(query).map((game) => (
          <Link to={"/juegos/" + game._id} key={game._id}>
            <ListGroup.Item>{game.name}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </>
  );
};

export default Search;
