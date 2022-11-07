import "./Talk.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Talk() {
  const [moreOne, setMoreOne] = useState(true);
  const [moreTwo, setMoreTwo] = useState(true);
  const handleMoreOneClick = () => {
    setMoreOne(false);
  };

  const handleLessOneClick = () => {
    setMoreOne(true);
  };
  const handleMoreTwoClick = () => {
    setMoreTwo(false);
  };

  const handleLessTwoClick = () => {
    setMoreTwo(true);
  };
  return (
    <div className="head">
      <h1>What do you want to talk about </h1>
      <h3>Topic</h3>
      <button id="btn" type="button">
        Supervisor
      </button>
      <button id="btn" type="button">
        Publishing
      </button>
      <button id="btn" type="button">
        Failure Experience
      </button>
      <button id="btn" type="button">
        Funding
      </button>
      {moreOne ? (
        <p type="button" onClick={handleMoreOneClick}>
          + more
        </p>
      ) : (
        <>
          <button id="btn" type="button">
            Work Life Balance
          </button>
          <button id="btn" type="button">
            Industry
          </button>
          <p type="button" onClick={handleLessOneClick}>
            - less
          </p>
        </>
      )}

      <h3>Fields</h3>
      <button id="btn" type="button">
        Bio Science
      </button>
      <button id="btn" type="button">
        Physics
      </button>
      <button id="btn" type="button">
        Computer Science
      </button>
      <button id="btn" type="button">
        Social Science
      </button>
      {moreTwo ? (
        <p type="button" onClick={handleMoreTwoClick}>
          + more
        </p>
      ) : (
        <p type="button" onClick={handleLessTwoClick}>
          - less
        </p>
      )}
      <Link to="/register/game">
        <button id="btn-back" type="button">
          Back
        </button>
      </Link>
      <Link to="/register/last">
        <button id="btn-next" type="button">
          Next
        </button>
      </Link>
      <Link to="/register">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
