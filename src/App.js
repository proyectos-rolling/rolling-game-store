import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>hi</h1>
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
