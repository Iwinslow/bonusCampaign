import currencyBirdLogo from "../assets/currencyBirdLogo.svg";
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <a href="https://www.home.currencybird.cl/">
          <img src={currencyBirdLogo} alt="Currency Bird logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
