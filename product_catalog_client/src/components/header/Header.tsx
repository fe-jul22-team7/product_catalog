import './Header.scss';
import Logo from '../../images/logo.svg';
import Favourite from '../../images/Favourite.svg';
import Cart from '../../images/Cart.svg';
import { Navbar } from '../Navbar/Navbar';


export const Header = () => (
  <header className="header">
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

  </header>
);
