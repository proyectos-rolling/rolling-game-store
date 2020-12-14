import React, { useState } from "react";
import {ListGroup, Form, FormControl} from "react-bootstrap";
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
    <div className="position-relative">
      <Form inline>
        <FormControl
          id="gameSearch"
          type="text"
          name="gameSearch"
          value={query}
          placeholder="Ingrese un juego..."
          onChange={handleChange}
          onBlur={()=>setTimeout(()=>setQuery(""),500)}
          autoComplete="off"
          className="mr-sm-2"
        />
      </Form>
      <ListGroup
        style={{
          maxHeight: "10rem",
          overflowY: "auto",
          position: "absolute",
          zIndex: "20",
        }}
        variant="flush"
      >
        {filterGames(query).map((game) => (
          <Link
            to={"/juegos/" + game._id}
            key={game._id}
            onClick={() => setQuery("")}
          >
            <ListGroup.Item>{game.name}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default Search;
