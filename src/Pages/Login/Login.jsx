import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Register">
      <div className="LoginWrapper">
        <h1 className="LoginTitle">LOGIN</h1>
        <h1 className="LoginSubTitle">SIGN IN</h1>
        <form>
          <input className="input" type="mail" placeholder="Email" />

          <input className="input" type="password" placeholder="Password" />
        </form>
        <p className="RegisterAgreement">
          By creating an account. I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <Link to="/home" className="LinkWithoutStyle">
          <button className="Button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
