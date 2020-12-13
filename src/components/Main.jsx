import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import GameCards from "./games/GameCards";
import { Link } from "react-router-dom";
import "./css/main.css";

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
      <Carousel style={{ marginTop: "-15px" }}>
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
      <Container>
        <h1>Ofertas</h1>
        {games
          .filter((game) => game.discount > 0)
          .map((game) => (
            <p key={game._id}>
              {game.name} {game.discount * 100}% OFF!!!
            </p>
          ))}
        <GameCards games={games} addItem={addItem} />
      </Container>
    </div>
  );
};

export default Main;
