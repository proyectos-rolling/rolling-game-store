import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registro from "./components/Registro";
import Contact from "./components/contact/Contact";
import Servicios from "./components/Servicios";
import Conocenos from "./components/Conocenos";
import Tienda from "./components/Tienda";
import Nosotros from "./components/Nosotros";
import Cart from "./components/Cart";
import GameDescription from "./components/games/gameDescription";
import * as LS from "./helpers/LSmanager";

function App() {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState(LS.Get("gamesCart"));
  const root_url = process.env.REACT_APP_API_ROOT_URL;

  const deleteFromCart = (game) => {
    let confirmDelete = window.confirm("está seguro que desea borrar el juego del carrito?")
    if(confirmDelete){
      setCart(cart.filter((item) => item._id !== game._id));
    }
  };

  const clearCart = () => {
    let confirmDelete = window.confirm(
      "está seguro que desea limpiar el carrito?"
    );
    if (confirmDelete) {
      setCart([]);
    }
  }

  const addItem = (e,game) => {
    e.preventDefault();
    if(cart.filter(item=>item._id===game._id).length===0){//solo agrego al carrito si no está el juego
      setCart([...cart,game]);
      alert("Se agregó el item al carrito")
      return
    }
    alert("El juego ya está en el carrito")
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
    <>
      <Router>
        <Navbar games={games} cart={cart} />
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
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/conocenos">
            <Conocenos />
          </Route>
          <Route path="/tienda">
            <Tienda />
          </Route>
          <Route path="/carrito">
            <Cart cart={cart} deleteFromCart={deleteFromCart} />
          </Route>
          <Route path="/juegos/:gameId">
            <GameDescription games={games} addItem={addItem} />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route>
            <h1>404 Not found</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
