import './Header.scss';
import { Navbar } from './Navbar';


export const Header = () => (
  <header
    className="header"
  >   
    <a  className="header_logo">
      LOGO
    </a>
    <Navbar />
    <a  className="header_logo">
      favorite
    </a>
    <a  className="header_logo">
      cart
    </a>
  </header>
);
