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

function App() {
  const [games, setGames] = useState([]);
  const root_url = process.env.REACT_APP_API_ROOT_URL;

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
        <Navbar games={games} />
        <Switch>
          <Route path="/" exact>
            <Main games={games} />
          </Route>
          <Route path="/registro" >
            <Registro />
          </Route>
          <Route path="/contacto" >
            <Contact rootUrl={root_url}/>
          </Route>
          <Route path="/servicios" >
            <Servicios />
          </Route>
          <Route path="/conocenos" >
            <Conocenos />
          </Route>
          <Route path="/tienda" >
            <Tienda />
          </Route>
          <Route path="/nosotros" >
            <Nosotros />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
