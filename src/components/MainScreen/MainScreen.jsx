import './MainScreen.scss';
import photo from '../../images/main-screen.jpg';

const MainScreen = () => {
  return (
    <section id="main-screen" className="main-screen">
      {/* <div className="main-screen__reactangle"></div>
      <div className="main-screen__circle"></div> */}

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

        <div className="main-screen__info">
          <p>благодійний карʼєрний ярмарок</p>
          <p>Створений для об’єднання молодих талантів з бізнесом <br />Та надання можливості знайти своє місце в професійному світі, <br /> отримуючи цінні ресурси від провідних компаній</p>
          <p>для студентів</p>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
