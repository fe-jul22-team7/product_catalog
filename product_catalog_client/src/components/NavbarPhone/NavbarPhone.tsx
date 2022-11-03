import { PageNavLink } from '../PageNavLink/PageNavLink';
import './NavbarPhone.scss';

export const NavbarPhone = () => (
  <nav
    className="navbar-phone"
    role="navigation"
    aria-label="main navigation"
    id="main-menu"
  >
    <PageNavLink to="/" text="Home" />
    <PageNavLink to="/phones" text="Phones" />
    <PageNavLink to="/tablets" text="Tablets" />
    <PageNavLink to="/accessories" text="Accessories" />
  </nav>
);
