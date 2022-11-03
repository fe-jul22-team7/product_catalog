import { PageNavLink } from '../PageNavLink/PageNavLink';
import './NavbarDesktop.scss';

export const NavbarDesktop = () => (
  <nav
    className="navbar-desktop"
    role="navigation"
    aria-label="main navigation"
  >
    <PageNavLink to="/" text="Home" />
    <PageNavLink to="/phones" text="Phones" />
    <PageNavLink to="/tablets" text="Tablets" />
    <PageNavLink to="/accessories" text="Accessories" />
  </nav>
);
