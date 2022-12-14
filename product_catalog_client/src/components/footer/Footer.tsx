import './Footer.scss';
import Logo from '../../images/logo.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return false;
  };

  return (
    <div className='footer'>
      <a href="" className='footer__logo'>
        <img src={Logo} alt="logo"/>
      </a>
  
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
      <a 
        onClick={scrollToTop}
        className='footer__backToTop-btn'>
          Back to top
      </a>
    </div>
  );  
};
