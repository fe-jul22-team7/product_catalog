import { Navbar } from './Navbar';
import './Header.scss';
import Logo from '../../images/logo.svg';
import Favourite from '../../images/Favourite.svg';
import Cart from '../../images/Cart.svg';


export const Header = () => (
  <header className="header">
    <div className="heade_mobile">
      <a className="header_logo">
        <img
          src={Logo}
          alt="logo"
        />
      </a>
      <a href='main-menu'> icon </a>
    </div>
    <div className="header_tible-desktop">
      <div className="header_block-logo-nav">
        <a className="header_logo">
          <img
            src={Logo}
            alt="logo"
          />
        </a>
        <Navbar />
      </div>

      <div className="header_block-user">
        <a className="header_favorite header_user-item">
          <img
            src={Favourite}
            alt="Favourite"
          />
        </a>
        <a className="header_cart header_user-item">
          <img
            src={Cart}
            alt="logo"
          />
        </a>
      </div>
    </div>

  </header>
);
