import "./LogIn.css";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your Email... "
        required
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your Password..."
        required
      />
      <br />
      <br />
      <Link to="/">
        <input type="submit" id="btn" value="Login" />
      </Link>
      <Link to="/">
        <b id="cross">+</b>
      </Link>
    </div>
  );
}
