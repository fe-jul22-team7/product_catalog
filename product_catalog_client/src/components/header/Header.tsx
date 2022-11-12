import './Header.scss';
import Logo from '../../images/logo.svg';
import Menu from '../../images/Menu.svg';
import Close from '../../images/Close.svg';

import { NavbarDesktop } from '../NavbarDesktop';
import { NavbarPhone } from '../NavbarPhone';
import { NavbarUser } from '../NavbarUser';

export const Header = () => {
  const menuBtn = document.querySelector('.header__button-menu');
  const menu = document.querySelector('.header__phone');
 
  if (menuBtn !== null && menu !== null) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }

  return (
    <header className="header" id='header'>
      <div className="header__decktop">
        <div className="header__block-menu">
          <a className="header__logo">
            <img
              src={Logo}
              alt="logo"
            />
          </a>
          <NavbarDesktop />
        </div>
        <div className="header__block-user">
          <NavbarUser/>
        </div>
        <a href='#menu-fone' className="header__button-menu">
          <img src={Menu} alt="menu" />
        </a>
      </div>
   
      <div className="header__phone" id="menu-fone">
        <div className="header__block-logo-button">
          <a className="header__logo">
            <img
              src={Logo}
              alt="logo"
            />
          </a>
          <a href='#' className="header__button-menu-phone">
            <img src={Close} alt="menu" />
          </a>
        </div>

        <div className="header__menu">
          <NavbarPhone />
        </div>

        <div className="header__block-user-phone">
          <NavbarUser/>
        </div>
      </div>
    </header>
  );
};
