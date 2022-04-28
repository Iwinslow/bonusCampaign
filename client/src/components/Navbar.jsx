import { Link } from "react-router-dom";

import logo from "../assets/currencyBird.svg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/">
            <div className={styles.logo}>
              <img src={logo} alt="CurrencyBird Logo" />
            </div>
          </Link>
          <div className={styles.buttons}>
            <Link to="/successfullinvitations">
              <div className={styles.item}>Estado de Invitaciones</div>
            </Link>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
