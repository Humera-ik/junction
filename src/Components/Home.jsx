import "./Home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="main">
      <p id="p1">
        Do you feel frustrated, anxious or depressed about your PhD? We’re here
        to help you find the support you need.
      </p>
      <p id="p2">
        Whether you would like to talk to someone experiencing similar problems
        or just need someone to understand your frustrations, we will help you
        find the right person to talk to. Our app provides a safe space for
        discussions and you can remain completely anonymous.
      </p>
      <Link to="/login">
        <button id="btn-log" type="button">
          Log In
        </button>
      </Link>
      <br />
      <Link to="/register">
        <button id="btn-reg" type="button">
          Register
        </button>
      </Link>
    </main>
  );
}
