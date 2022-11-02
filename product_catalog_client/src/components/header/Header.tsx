import './Header.scss';
import Logo from '../../images/logo.svg';
import Favourite from '../../images/Favourite.svg';
import Cart from '../../images/Cart.svg';
import Menu from '../../images/Menu.svg';

import { Navbar } from '../Navbar/Navbar';


export const Header = () => (
  <header className="header">
    <div className="header__block-logo-nav">
      <a className="header__logo">
        <img
          src={Logo}
          alt="logo"
        />
      </a>
      <Navbar />
    </div>

    <div className="header__block-user">
      <a className="header__favorite header__user-item">
        <img
          src={Favourite}
          alt="Favourite"
        />
      </a>
      <a className="header__cart header__user-item">
        <img
          src={Cart}
          alt="cart"
        />
      </a>
    </div>
    <div className="header__button-menu">
      <img src={Menu} alt="menu" />
    </div>
  </header>
);
