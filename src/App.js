import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const [games, setGames] = useState([]);
  const root_url = "https://rolling-game-store-backend.herokuapp.com/api";

  useEffect(() => {
    fetch(`${root_url}/games/active`)
      .then((res) => res.json())
      .then((json) => {
        setGames(json);
      })
      .catch((error) => console.error("Hubo un error en el fetch: ", error));
  }, []);
  return (
    <>
      <Router>
        <Navbar games={games} />
        <Main games={games} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
