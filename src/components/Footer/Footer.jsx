import './Footer.scss';
import arrow from '../../images/arrow.svg'
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <section id="footer" className="footer ">
      <aside className='container'>
        <span className='footer-mainTxt'>ми переконали</span>
        <div className='footer-sub-mainTxt'>
          <span className='footer-mainTxt'>тебе?</span>
          <a href="https://t.me/PoDeal_bot" className="footer__register" target='blank'>
            <span>реєстрація</span>
            <img src={arrow} alt="arrow"></img>
          </a>
        </div>

        <menu className='footer-menu'>
          <ul>
            <li>
              <a href="http://">Соціальні мережі</a>
            </li>
            <li>
              <a href="https://www.instagram.com/usl.vn/" target='blank'>
                Вінницький відокремлений підрозділ УСЛ

              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/usl.org.ua/" target='blank'>
                Українська студентьска ліга
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="team" smooth={true} duration={500}>про нас</Link>
            </li>
            <li>
              <Link to="program" smooth={true} duration={500}>програма</Link>
            </li>
            <li>
              <Link to="partners" smooth={true} duration={500}>партнери</Link>
            </li>
            <li>
              <Link to="partners" smooth={true} duration={500}>про ПоDeal `24</Link>
            </li>
          </ul>
          <ul>
            <li>
              Розроблено
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dasha-dusaniuk/" target='blank'>
                Дар'я (designer) 
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alinavovkov/" target='blank'>
                Аліна (developer)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pavlo-kostyshyn-5871b8196/" target='blank'>
                Павло (developer)
              </a>
            </li>
          </ul>
        </menu>
      </aside>

    </section>
  );
};