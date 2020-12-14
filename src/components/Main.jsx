import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import GameCards from "./games/GameCards";
import { Link } from "react-router-dom";
import "./css/main.css";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
const Main = ({ games, addItem }) => {
  const truncate = (string, maxNumber) => {
    if (string.length > maxNumber) {
      return string.slice(0, maxNumber) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="flex-grow-1">
      <div style={{ height: "15px" }} className="bg-white d-md-none">
      </div>
      <Carousel className="maincontainer"style={{ marginTop: "-15px" }}>
        {games
          .filter((game) => game.featured)
          .map((game) => (
            <Carousel.Item key={game._id}>
              <img
                className="d-block w-100"
                src={`images/${game.images.banner_image_url}`}
                alt={game.name}
              />
              <Link to={"/juegos/" + game._id}>
                <Carousel.Caption className="carruselbackground">
                  <h5>{game.name}</h5>
                  <p className="d-none d-md-block">{truncate(game.description, 200)}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
      <Container className='text-center'>
        <Accordion>
          <Card className="bg-dark m-2">
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey="0" className="btn btn-primary">
                Ofertas
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {games
                  .filter((game) => game.discount > 0)
                  .map((game) => (
                    <div className="text-white m-2 row wrap justify-content-around">
                      <h4 key={game._id}>
                        {game.name} {game.discount * 100}% OFF!!!
                      </h4>
                    </div>
                  ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
      <Container className="mcontainer" fluid>
        <GameCards games={games} addItem={addItem} />
      </Container>
    </div>
  );
};

export default Main;
