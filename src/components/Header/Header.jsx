import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

import logo from '../../images/DealLogo.svg';
import arrow from '../../images/arrow.svg';
import burger from '../../images/burger.svg';
import close from '../../images/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Toggle the no-scroll class on the body when the menu is open
    document.body.classList.toggle('no-scroll', isMenuOpen);

    // Cleanup: remove the class if component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__logo"></img>
        <img
          src={burger}
          alt="burger menu"
          className="header__burger"
          onClick={toggleMenu}
        />
        <nav>
          <ul className="header__nav">
            <li><Link to="team" smooth={true} duration={500}>про нас</Link></li>
            <li><Link to="partners" smooth={true} duration={500}>партнери</Link></li>
            <li><Link to="program" smooth={true} duration={500}>програма</Link></li>
          </ul>
        </nav>

        <a href="https://t.me/PoDeal_bot" className="header__register" target='blank'>
          <span>реєстрація</span>
          <img src={arrow} alt="arrow"></img>
        </a>

        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu__container">
            <div className="menu__top">
              <img
                src={close}
                className="menu__top--close"
                alt='close icon'
                onClick={toggleMenu}
              />
              <a href="https://t.me/PoDeal_bot" className="header__register" target='blank'>
                <span>реєстрація</span>
                <img src={arrow} alt="arrow"></img>
              </a>
            </div>
            <ul>
              <li>
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  offset={-100}
                >
                  про нас
                </Link>
              </li>
              <li>
                <Link
                  to="partners"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  партнери
                </Link>
              </li>
              <li>
                <Link
                  to="program"
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  програма
                </Link>
              </li>
            </ul>
            <img src={logo} alt="" className="menu__logo"></img>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
