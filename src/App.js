import { React, useState } from "react";
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

function App() {
  var [state, setstate] = useState("home");

  function handleChange(item) {
    setstate(item);
  }

  return (
    <div className="App">
      <div className="container">
        <Header onsel={handleChange} />
        {
          {
            home: <HomeBody />,
            about: <About />,
            portfolio: <Portfolio />,
            skills: <Skils />,
            contact: <Contact />,
          }[state]
        }
      </div>

      <Footer onsel={handleChange} />
    </div>
  );
}

export default App;
