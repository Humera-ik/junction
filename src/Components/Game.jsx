import "./Game.css";
import { Link } from "react-router-dom";

export function Game() {
  return (
    <div className="game">
      <h1>Let's play a game to assess your mental health!</h1>
      <div id="img">
        <button type="button" id="play-btn">
          Play
        </button>
      </div>
      <div className="flex">
        <Link to="/register/fill">
          <button type="button" id="btn">
            Back
          </button>
        </Link>
        <Link to="/register/talk">
          <button type="button" id="btn">
            Next
          </button>
        </Link>
      </div>
      <Link to="/register/talk">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
