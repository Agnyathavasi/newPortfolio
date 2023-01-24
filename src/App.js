import { React } from "react";
import "./css/App.css";
import Header from "./components/header";
import HomeBody from "./components/homeBody";
import About from "./components/About";
import Skils from "./components/Skils";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<HomeBody />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/portfolio" element={<Portfolio />}>
            </Route>
            <Route path="/skills" element={<Skils />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
