import currencyBirdLogo from "../assets/currencyBirdLogo.svg";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <a href="https://www.home.currencybird.cl/">
          <img src={currencyBirdLogo} alt="Currency Bird logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
