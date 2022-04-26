import logo from "../assets/currencyBird.svg";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo"></div>
        <img src={logo} alt="CurrencyBird Logo" />
      </nav>
    </header>
  );
}

export default Navbar;
