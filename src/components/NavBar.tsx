import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Game Hub Logo" className="navbar-logo" />
        <h1 className="navbar-title">Game Hub</h1>
      </div>

      <div className="navbar-right">
        <SearchInput />
      </div>
    </nav>
  );
};

export default NavBar;
