import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link to="/" className="brand-logo">
          <h3>
            {" "}
            <span>Brand Logo</span>{" "}
          </h3>
        </Link>
      </div>

      <div className="middle">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/">
          <span>Hire A Guide</span>
        </Link>
      </div>

      <div className="right">
        <Link to="/signin">
          <span>Login</span>
        </Link>
        <Link to="/signup">
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
