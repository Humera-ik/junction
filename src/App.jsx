import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home.jsx";
import { LogIn } from "./Components/LogIn.jsx";
import { Register } from "./Components/Register.jsx";
import { Fill } from "./Components/Fill.jsx";
import { Game } from "./Components/Game.jsx";
import { Talk } from "./Components/Talk.jsx";
import { Last } from "./Components/Last.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <h1>
          <Link id="link" to="/">
            PhatigueD?
          </Link>
        </h1>
        <Link id="link" to="/Contact">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register/fill" element={<Fill />}></Route>
        <Route path="/register/game" element={<Game />}></Route>
        <Route path="/register/talk" element={<Talk />}></Route>
        <Route path="/register/last" element={<Last />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
