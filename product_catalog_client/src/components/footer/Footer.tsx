import React from 'react';
import './Footer.scss';

export const Footer:React.FC = () => (
  <div className='footer'>
    <img
      src='./images/Footer-logo.png'
      alt="logo"
      className='footer__logo'
    />

    <nav className='footer__nav'>
      <ul className='footer__nav-list'>
        <li className='footer__nav-item'>
          <a href="" className='footer__nav-link'>Github</a>
        </li>
        <li className='footer__nav-item'>
          <a href="" className='footer__nav-link'>Contacts</a>
        </li>
        <li className='footer__nav-item'>
          <a href="" className='footer__nav-link'>Rights</a>
        </li>
      </ul>
    </nav>
    <a href="#" className='footer__backToTop-btn'>Back to top</a>
  </div>
);