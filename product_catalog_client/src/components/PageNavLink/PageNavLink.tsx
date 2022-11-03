import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavLink.scss';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={'navbar_pageNavLink pageNavLink'}>
      {text}
    </NavLink>
  );
};
