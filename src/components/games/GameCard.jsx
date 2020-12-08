import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"

const GameCard = ({ game }) => {
  return (
    <Col sm={6} className="mt-3 mb-3">
      <Card bg="dark" text="white" className="h-100 p-2 mt-3">
        <Card.Img
          variant="top"
          src={`images/${game.images.poster_image_url}`}
        />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
          {game.categories.length !== 0 && <Card.Text>Tags: {game.categories.join(", ")}</Card.Text>}
          <Card.Link as={Link} to={"/juegos/"+game._id} className="text-white">
            ver más...
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
  
};

export default GameCard;
