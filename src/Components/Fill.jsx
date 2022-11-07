import "./Fill.css";
import { Link } from "react-router-dom";

export function Fill() {
  return (
    <div className="fill">
      <h1>Can you tell us a bit more about Yourself?</h1>
      <div className="div">
        <p>Gender</p>
        <input type="radio" id="female" name="female" value="Female" />
        <label for="female">Female</label>
        <input type="radio" id="male" name="male" value="Male" />
        <label for="male">Male</label>
        <input type="radio" id="any" name="any" value="any" />
        <label for="any">I'd rather not say</label>
      </div>
      <div className="div">
        <p>Education</p>
        <input id="edu" name="edu" type="text" />
      </div>
      <div className="div">
        <p>Age</p>
        <input id="age" name="age" type="text" />
      </div>
      <div className="btn">
        <input id="btn" type="submit" value="Next" />
      </div>
      <Link to="/register">
        <b id="skip">Skip</b>
      </Link>
    </div>
  );
}
