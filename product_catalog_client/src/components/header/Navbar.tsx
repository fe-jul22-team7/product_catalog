import { PageNavLink } from './PageNavLink';
import './Navbar.scss';

export const Navbar = () => (
  <nav
    data-cy="nav"
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    id="main-menu"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home"/>
        <PageNavLink to="/phones" text="Phones" />
        <PageNavLink to="/tablets" text="Tablets" />
        <PageNavLink to="/accessories" text="Accessories" />
      </div>
    </div>
  </nav>
);
