import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Game Hub Logo" className="navbar-logo" />
        <h1 className="navbar-title"></h1>
      </div>

      <div className="navbar-right">
        <SearchInput onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default NavBar;
