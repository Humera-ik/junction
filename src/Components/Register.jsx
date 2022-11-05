import "./Register.css";

export function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <input id="name" name="fullname" type="text" placeholder="Full name" />
      <br />
      <br />
      <input id="email" name="email" type="email" placeholder="Email address" />
      <br />
      <br />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <br />
      <br />
      <input id="btn" type="submit" value="Create Account" />
    </div>
  );
}
