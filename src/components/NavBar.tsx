import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Game Hub Logo" className="logo" />
      <span className="nav-title">Game Hub</span>
    </div>
  );
};

export default NavBar;
