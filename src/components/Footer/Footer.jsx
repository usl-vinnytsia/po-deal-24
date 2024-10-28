import './Footer.scss';
import arrow from '../../images/arrow.svg'

export const Footer = () => {
  return (
    <section id="footer" className="footer ">
      <aside className='container'>
        <span className='footer-mainTxt'>ми переконали</span>
        <div className='footer-sub-mainTxt'>
          <span className='footer-mainTxt'>тебе?</span>
          <a href="https://t.me/PoDeal_bot" className="footer__register">
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
              <a href="http://">
                Instagram
              </a>
            </li>
            <li>
              <a href="http://">Telegram
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="http://">
                про нас
              </a>
            </li>
            <li>
              <a href="http://">
                Програма
              </a>
            </li>
            <li>
              <a href="http://">
                Партнери
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="http://">Соціальні мережі</a>
            </li>
            <li>
              <a href="http://">
                Instagram
              </a>
            </li>
            <li>
              <a href="http://">Telegram
              </a>
            </li>
          </ul>
        </menu>
      </aside>

    </section>
  );
};