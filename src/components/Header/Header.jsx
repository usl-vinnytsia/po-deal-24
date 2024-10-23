import { Link } from 'react-scroll';
import './Header.scss';

import logo from '../../images/DealLogo.svg';
import arrow from '../../images/arrow.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" className="header__logo"></img>
        <nav>
          <ul>
            <li>
              <Link to="main-screen" smooth={true} duration={500}>про нас</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>партнери</Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500}>програма</Link>
            </li>
          </ul>
        </nav>
        <a href="https://t.me/PoDeal_bot" className="header__register">
          <span>реєстрація</span>
          <img src={arrow} alt="arrow"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
