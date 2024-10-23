import { Link } from 'react-scroll';
import './Header.scss';

import logo from '../../images/DealLogo.svg';
import arrow from '../../images/arrow.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="" className="logo"></img>
        <nav>
          <ul>
            <li><Link to="main-screen" smooth={true} duration={500}>про нас</Link></li>
            <li><Link to="about" smooth={true} duration={500}>партнери</Link></li>
            <li><Link to="team" smooth={true} duration={500}>програма</Link></li>
          </ul>
        </nav>
        <div>
          <a href="http://">реєстрація</a>
          <img src={arrow} alt="arrow" className="header-arrow"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
