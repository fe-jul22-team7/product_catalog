
import './NavbarUser.scss';
import Cart from '../../images/Cart.svg';
import Favourite from '../../images/Favourite.svg';
import PageNavUserLink from '../PageNavUserLink';
import { useContext } from 'react';
import CartContext from '../../FavoriteContext';

export const NavbarUser = () => {
  const {items} = useContext(CartContext);

  return (
    <nav
      className="navbar-user"
      role="navigation"
      aria-label="main navigation"
      id="main-menu"
    > 
      <div className="navbar-user__item">
        <PageNavUserLink to="/favourite" image={Favourite} />
        {items.length !== 0 && (
          <div className="navbar-user__hard">
            <span className="navbar-user__hard-item">
              {items.length}
            </span>
          </div>
        )}
      </div>

      <div className="navbar-user__item">
        <PageNavUserLink to="/cart" image={Cart} />
      </div>
      
    </nav>
  );
};
