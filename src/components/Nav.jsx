import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to="/blue">
        <h1>BLUE!</h1>
      </Link>

      <Link to="/red">
        <h1>RED!</h1>
      </Link>
      <Link to="/">
        <h1>HOME!</h1>
      </Link>

      <Link to="/yellow">
        <h1>YELLOW!</h1>
      </Link>

      <Link to="/green">
        <h1>GREEN!</h1>
      </Link>
    </div>
  );
}
export default NavBar;
