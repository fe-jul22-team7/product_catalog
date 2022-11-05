import { NavLink } from 'react-router-dom';
import './NavbarPhone.scss';
import Cart from '../../images/Cart.svg';
import Favourite from '../../images/Favourite.svg';
import { useContext } from 'react';
import CartContext from '../../FavoriteContext';

interface Props {
  updateMenu: () => void;
}

export const NavbarPhone: React.FC<Props> = ({ updateMenu }) => {
  const { items } = useContext(CartContext);


  return (

    <div className="navbar-phone">
      <nav
        role="navigation"
        aria-label="main navigation"
      >
        <NavLink
          to="/"
          className="navbar-phone__link"
          onClick={updateMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/phones"
          className="navbar-phone__link"
          onClick={updateMenu}

        >
          Phones
        </NavLink>
        <NavLink
          to="/tablets"
          className="navbar-phone__link"
          onClick={updateMenu}
        >
          Tablets
        </NavLink>
        <NavLink
          to="/accessories"
          className="navbar-phone__link"
          onClick={updateMenu}
        >
          Accessories
        </NavLink>
      </nav>

      <div className="navbar-phone__user" >
        <div className="navbar-phone__user-item">
          <NavLink
            to="/favourite"
            onClick={updateMenu}
            className="navbar-phone__user-link"
          >
            <img
              src={Favourite}
              alt="Favourite"
            />
          </NavLink>
          {items.length !== 0 && (
            <div className="navbar-phone__hard">
              <span className="navbar-phone__hard-item">
                {items.length}
              </span>
            </div>
          )}
        </div>

        <div className="navbar-phone__user-item">

          <NavLink
            to="/cart"
            onClick={updateMenu}
            className="navbar-phone__user-link"
          >
            <img
              src={Cart}
              alt="Favourite"
            />
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};
