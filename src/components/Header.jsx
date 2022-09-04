// Header.jsx

import Logo from "../assets/logo.svg";
import IconCart from "../assets/icon-cart.svg";
import IconMenu from "../assets/icon-menu.svg";
import IconClose from "../assets/icon-close.svg";
import ImgAvatar from "../assets/image-avatar.png";

const Header = (props) => {
  return (
    <header className="header">
      <button className="header__btn-open">
        <img
          className="header__icon-menu"
          src={IconMenu}
          alt="hamburger menu"
        />
        <img
          className="header__icon-close closed"
          src={IconClose}
          alt="close menu"
        />
      </button>

      <img className="header__logo" src={Logo} alt="sneakers logo" />
      <img className="header__icon-cart" src={IconCart} alt="shopping cart" />
      <img className="header__avatar" src={ImgAvatar} alt="user avatar" />
      <nav className="header__navigation closed">
        <a href="#0" className="header__nav-link">
          Collections
        </a>
        <a href="#0" className="header__nav-link">
          Men
        </a>
        <a href="#0" className="header__nav-link">
          Women
        </a>
        <a href="#0" className="header__nav-link">
          About
        </a>
        <a href="#0" className="header__nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
