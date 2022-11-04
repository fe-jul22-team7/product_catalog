import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavUserLink.scss';


interface Props {
  to: string; 
  image: string;
}

export const PageNavUserLink: FC<Props> = ({ to, image }) => {
  return (
    <NavLink
      to={to}
      className="page-nav-user-link">
      <img
        src={image}
        alt="Favourite"
      />
    </NavLink>
  );
};
