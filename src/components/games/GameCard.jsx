import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./css/games.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;

const GameCard = ({ game, addItem }) => {
  const truncate = (string, maxNumber) => {
    if (string.length > maxNumber) {
      return string.slice(0, maxNumber) + "... ver más";
    } else {
      return string;
    }
  };

  return (
    <Col sm={6} md={4} className="mt-3 mb-3 w-xl-20">
      <Card bg="dark" text="white" className="h-100 p-2 mt-3">
        <Card.Link as={Link} to={"/juegos/" + game._id}>
          <Card.Img
            variant="top"
            src={`images/${game.images.poster_image_url}`}
          />
        </Card.Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{game.name}</Card.Title>
          <Card.Link
            as={Link}
            to={"/juegos/" + game._id}
            className="text-white flex-grow-1"
          >
            <Card.Text>{truncate(game.description, 300)}</Card.Text>
          </Card.Link>
          {game.categories.length !== 0 && (
            <Card.Text className="my-3">
              <strong>Tags</strong>: {game.categories.join(", ")}
            </Card.Text>
          )}
          <h4
            style={{ cursor: "pointer" }}
            className="my-3"
            onClick={(e) => addItem(e, game)}
          >
            {cartIcon} Agregar al carrito
          </h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GameCard;
