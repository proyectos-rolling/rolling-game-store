import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import GameCards from "./games/GameCards";
import './css/main.css'

const Main = ({games}) => {

  return (
    <div className="flex-grow-1">
      <Carousel>
        {games
          .filter((game) => game.featured)
          .map((game) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`images/${game.images.banner_image_url}`}
                alt={game.name}
              />
              <Carousel.Caption className="carruselbackground">
                <h3>{game.name}</h3>
                <p>{game.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      <Container>
        <h1>Ofertas</h1>
        {games
          .filter((game) => game.discount > 0)
          .map((game) => (
            <p>
              {game.name} {game.discount * 100}% OFF!!!
            </p>
          ))}
        <h1>Juegos</h1>
        <GameCards games={games} />
      </Container>
    </div>
  );
};

export default Main;
