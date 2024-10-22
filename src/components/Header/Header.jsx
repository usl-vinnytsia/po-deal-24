import { Link } from 'react-scroll';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="main-screen" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
