import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/gamedescription.css"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import Price from "../games/Price"

const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;

const GameDescription = ({ games, addItem }) => {
  const { gameId } = useParams();
  const game = games.filter((game) => game._id === gameId)[0] || {
    images: {poster_image_url:""},
    name: "",
    description: "",
    price: 0,
  }; //filtro los juegos por el id, como devuelve un array, elijo el primer (y único) item

  return ( 
    <div className="container gamedescrip " >
      <Row>
        <Col  sm={5}>
        <img className="gameimg flex-grow-1"
          variant="top"
          src={`/images/${game.images.poster_image_url}`}
          alt={game.name}
        />
      
      </Col>
      <Col sm={7}>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <p><Price game={game} /></p>
      <Button variant="primary" style={{ cursor: "pointer" }} onClick={(e) => addItem(e, game)}> {cartIcon} Agregar al carrito</Button>{' '}
      
      </Col>
    
    </Row>
    </div>
  );
};

export default GameDescription;
