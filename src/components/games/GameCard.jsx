import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const GameCard = ({ game }) => {
  return (
    <Col sm={6}>
      <Card bg="dark" text="white" >
        <Card.Img variant="top" src={`images/${game.images.poster_image_url}`} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
          <Card.Link href="#" className="text-white">ver más...</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
  
};

export default GameCard;
