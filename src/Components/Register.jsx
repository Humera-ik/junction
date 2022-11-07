import "./Register.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        id="name"
        name="username"
        type="text"
        placeholder="Username"
        required
      />
      <br />
      <br />
      <input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="Nickname(For Your anonymous identity)"
        required
      />
      <br />
      <br />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email address (University)"
        required
      />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <br />
      <br />
      <Link to="/register/fill">
        <input id="btn" type="submit" value="Create Account" />
      </Link>
      <Link to="/">
        <b id="cross">+</b>
      </Link>
    </div>
  );
}
