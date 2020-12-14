import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Registro from "./components/Registro";
import Contact from "./components/contact/Contact";
import Conocenos from "./components/Conocenos";
import Nosotros from "./components/Nosotros";
import Error404 from "./components/Error404"
import Cart from "./components/cart/Cart";
import GameDescription from "./components/games/gameDescription";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./components/css/app.css"
import * as LS from "./helpers/LSmanager";


function App() {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState(LS.Get("gamesCart"));
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    body: "",
    buttonPrimary: "",
    buttonConfirmDelete: "",
    game: {},
  });
  const [loggedUser, setLoggedUser] = useState(LS.Get("loggedUser")||{email:"",admin:false});

  const root_url = process.env.REACT_APP_API_ROOT_URL;
  const mainSection = { minHeight: "calc(100vh - 68px)" };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalAndDelete = () => {
    if (modal.game) {
      const updatedCart = cart.filter((item) => item._id !== modal.game._id);
      setCart(updatedCart);
    } else {
      setCart([]);
    }
    setShowModal(false);
  };

  const deleteFromCart = (game) => {
    setModal({
      title: "Eliminar juego del carrito?",
      body: `Está seguro que desea eliminar ${game.name} del carrito?`,
      buttonSecondary: "Cancelar",
      buttonConfirmDelete: "Borrar",
      game: game,
    });
    setShowModal(true);
  };

  const clearCart = () => {
    setModal({
      title: "Limpiar carrito?",
      body: `Está seguro que desea limpiar carrito?`,
      buttonSecondary: "Cancelar",
      buttonConfirmDelete: "Limpiar carrito",
    });
    setShowModal(true);
  };

  const addItem = (e, game) => {
    e.preventDefault();
    if (cart.filter((item) => item._id === game._id).length === 0) {
      //solo agrego al carrito si no está el juego
      setCart([...cart, game]);
      setModal({
        title: "Juego agregado",
        body: `Se agregó ${game.name} al carrito`,
        buttonPrimary: "Aceptar",
      });
      setShowModal(true);
      return;
    }
    setModal({
      title: "Juego No agregado",
      body: "El juego ya está en el carrito. Prueba otro juego!",
      buttonPrimary: "Aceptar",
    });
    setShowModal(true);
  };

  useEffect(() => {
    LS.Set("gamesCart", cart);
  }, [cart]);

  useEffect(() => {
    fetch(`${root_url}/games/active`)
      .then((res) => res.json())
      .then((json) => {
        setGames(json);
      })
      .catch((error) => console.error("Hubo un error en el fetch: ", error));
  }, [root_url]);
  return (
    <div className="d-flex flex-column" style={mainSection}>
      <Navbar
        games={games}
        cart={cart}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Main games={games} addItem={addItem} cart={cart} />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/contacto">
            <Contact rootUrl={root_url} />
          </Route>
          <Route path="/conocenos">
            <Conocenos />
          </Route>
          <Route path="/carrito">
            <Cart
              cart={cart}
              deleteFromCart={deleteFromCart}
              clearCart={clearCart}
            />
          </Route>
          <Route path="/juegos/:gameId">
            <GameDescription games={games} addItem={addItem} />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.body}</Modal.Body>
        <Modal.Footer>
          {modal.buttonSecondary && (
            <Button variant="secondary" onClick={handleCloseModal}>
              {modal.buttonSecondary}
            </Button>
          )}
          {modal.buttonPrimary && (
            <Button variant="primary" onClick={handleCloseModal}>
              {modal.buttonPrimary}
            </Button>
          )}
          {modal.buttonConfirmDelete && (
            <Button variant="danger" onClick={handleCloseModalAndDelete}>
              {modal.buttonConfirmDelete}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}

export default App;
