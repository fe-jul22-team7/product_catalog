import './Header.scss';
import Logo from '../../images/logo.svg';
import { NavbarDesktop } from '../NavbarDesktop';
import { NavbarUser } from '../NavbarUser';
import { useState } from 'react';
import { NavbarPhone } from '../NavbarPhone';

export const Header = () => {
  const [menuClass, setMenuClass] = useState('header__phone--hidden');
  const [buttonClass, setButtonClass] = useState('header__button-menu--open');
  const [isMenuCliked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuCliked) {
      setMenuClass('header__phone--visible');
      setButtonClass('header__button-menu--close');
    } else {
      setMenuClass('header__phone--hidden');
      setButtonClass('header__button-menu--open');
    }

    setIsMenuClicked(!isMenuCliked);
  };

  return (
    <header className="header" id='header'>
      <div className="header__decktop">
        <div className="header__block-menu">
          <a className="header__logo">
            <a href='/'>
              <img
                src={Logo}
                alt="logo"
              />
            </a>
            
          </a>
          <NavbarDesktop />
        </div>

        <div className="header__block-user">
          <NavbarUser />
        </div>
        <div
          className={buttonClass}
          onClick={updateMenu}
        ></div>

      </div>

      <div className={menuClass} id="menu-fone">       
        <NavbarPhone updateMenu={updateMenu}/>          
      </div>
    </header>
  );
};
