import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <Link to="/blue">
        <h1>Blue</h1>
      </Link>

      <Link to="/red">
        <h1>Red</h1>
      </Link>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <Link to="/yellow">
        <h1>Yellow</h1>
      </Link>

      <Link to="/green">
        <h1>Green</h1>
      </Link>
    </div>
  );
}
export default Footer;
