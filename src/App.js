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
            <Route path="/newPortfolio/" element={<HomeBody />}>
            </Route>
            <Route path="/newPortfolio/about" element={<About />}>
            </Route>
            <Route path="/newPortfolio/portfolio" element={<Portfolio />}>
            </Route>
            <Route path="/newPortfolio/skills" element={<Skils />}>
            </Route>
            <Route path="/newPortfolio/contact" element={<Contact />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
