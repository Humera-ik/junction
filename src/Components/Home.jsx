import "./Home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="App">
      <nav className="nav">
        <h1>
          <Link to="/">Our Application Name</Link>
        </h1>
        <Link to="/Contact">contact</Link>
      </nav>
      <main className="main">
        <p id="p1">
          Do you feel frustrated, anxious or depressed about your PhD? We’re
          here to help you find the support you need.
        </p>
        <p id="p2">
          Use this app to help on your phd career! Whether you would like to
          talk to someone experiencing similar problems or just need someone to
          understand your frustrations, we will help you find the right person
          to talk to.
        </p>
        <button id="btn-log" type="button">
          Log in
        </button>
        <br />
        <Link to="/register">
          <button id="btn-reg" type="button">
            Register
          </button>
        </Link>
      </main>
    </div>
  );
}