import './MainScreen.scss';
import photo from '../../images/main-screen.webp';
import logo from '../../images/DealLogo.svg';

const MainScreen = () => {
  return (
    <section id="main-screen" className="main-screen">

      <div className="main-screen__content container">
        <div className="main-screen__title title">
          <span className="title__first-line">твоя угода</span>
          <div className="title__second-line">
            <span>твоя угода</span>
            <span className="title__bracket title__bracket--left">(</span>
            <div className="title__image">
              <img
                src={photo}
                alt='main screen'
                className='title__image--img' />

            </div>
            <span className="title__bracket title__bracket--right">)</span>
            <span>на поділлі</span>
          </div>
        </div>

        <div className="main-screen__title--mobile">
          <span className="title__first-line">твоя угода</span>
          <div className="title__second-line--mobile">
            <span>на</span>
            <img src={logo} alt='' className='main-screen__title--mobile--img' />
          </div>

          <div className="title__bracket-block">
            <span className="title__bracket title__bracket--left">(</span>
            <div className="title__image">
              <img
                src={photo}
                alt='main screen'
                className='title__image--img' />

            </div>
            <span className="title__bracket title__bracket--right">)</span>
          </div>
        </div>

        <div className="main-screen__info">
          <p className='main-screen__info--left'>багатоформатний карʼєрний ярмарок</p>
          <p className='main-screen__info--center'>Створений для об’єднання молодих талантів з бізнесом Та надання можливості знайти своє місце в професійному світі, отримуючи цінні ресурси від провідних компаній</p>
          <p className='main-screen__info--right'>для студентів</p>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
