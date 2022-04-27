import { Link } from "react-router-dom";

import logo from "../assets/currencyBird.svg";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/">
            <div className="navbar__logo">
              <img src={logo} alt="CurrencyBird Logo" />
            </div>
          </Link>
          <div className="navbar__buttons">
            <Link to="/invite">
              <div className="navbar__item">Invitar</div>
            </Link>
            <Link to="/successfullinvitations">
              <div className="navbar__item">Estado de Invitaciones</div>
            </Link>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
